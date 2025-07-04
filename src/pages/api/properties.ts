import type { APIRoute } from "astro";
import { API_CONFIG } from "../../config/api.js";

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";

    try {
        // Realizar la petición a la API externa con el parámetro de página
        const response = await fetch(
            `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PROPERTIES}?page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    // Agregar cualquier otro encabezado necesario
                },
            }
        );

        if (!response.ok) {
            return new Response(
                JSON.stringify({
                    error: "Error al obtener propiedades de la API externa",
                }),
                {
                    status: response.status,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        const data = await response.json();

        // Transformar los datos en el formato esperado por el frontend
        const result = {
            properties: data.data.map((property: any) => ({
                id: property.id,
                imageUrl: property.images && property.images.length > 0
                    ? property.images[0]
                    : "https://placehold.co/800x800/222/fff?text=Imagen+no+disponible",
                text: `${property.type.toUpperCase()} - ${property.investment_formatted}`,
                location: property.location
                    ? `${property.location.line2}`
                    : "Ubicación no disponible",
                features: property.features || [],
                type: property.type,
                // Incluir otros datos relevantes
            })),
            meta: data.meta || {},
            hasMorePages: data.meta?.current_page < data.meta?.last_page
        };

        return new Response(
            JSON.stringify(result),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.error("Error en el endpoint de propiedades:", error);

        return new Response(
            JSON.stringify({
                error: "Error interno del servidor",
                properties: [],
                meta: {},
                hasMorePages: false
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
};