// Configuración centralizada para URLs de API
export const API_CONFIG = {
    // URL base de la API que puede cambiarse fácilmente cuando sea necesario
    BASE_URL: "http://urbancms.up.railway.app/api/",

    // Endpoints específicos
    ENDPOINTS: {
        ARTICLES: "articles",
        ARTICLE_DETAIL: (id) => `articles/${id}`,
        ARTICLE_COMMENTS: (id) => `articles/${id}/comments`
    }
};