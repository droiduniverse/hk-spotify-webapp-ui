export default (config, env, helpers) => {
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    plugin.definitions['process.env.PREACT_APP_SEARCH_SERVICE_URI'] = JSON.stringify('http://localhost:3000/search/searchAlbum');
}