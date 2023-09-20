var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
  //routes: {
    //occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      //route: '/data'
    //}
  routes: {
    enabledRoutes: ['occurrenceSearch', 'institutionKey', 'institutionSearch', 'collectionKey', 'collectionSearch', 'datasetKey', 'datasetSearch'],
institution: {
    mapSettings: {
      enabled: true,
      lat: 58,
      lng: -102,
      zoom: 3.5
      },
    },
  },
  
  occurrence: {
    mapSettings: {
      lat: 58,
      lng: -102,
      zoom: 3.5
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'equals', key: 'publishingCountry', value: "CA" }, 
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
if (pageLang === 'fr')  {
  siteConfig.routes.occurrenceSearch.route = '/fr/occurrences/search';
}