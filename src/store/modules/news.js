import api from '@/apiHandler/newsApi';

const News = {
  namespaced: true,
  state: {
    newsData: {
      totalResults: null,
      articles: [],
    },
    fakeData: {
      status: 'ok',
      totalResults: 241584,
      articles: [
        {
          source: {
            id: 'engadget',
            name: 'Engadget',
          },
          author: 'Kris Holt',
          title: 'Senator Warren urges Amazon to tackle COVID-19 misinformation',
          description: 'A month before the COVID-19\r\n pandemic shut down much of the West in March 2020, Amazon pledged to remove products\r\n that claimed to cure the coronavirus. However, items that promote misinformation about COVID-19 and vaccines are still appearing in search res…',
          url: 'https://www.engadget.com/elizabeth-warren-amazon-andy-jassy-covid-19-misinformation-search-results-150018239.html',
          urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-09/fbc2f0d0-10b3-11ec-aaf2-e8ef90882cb0',
          publishedAt: '2021-09-08T15:00:18Z',
          content: 'A month before the COVID-19\r\n pandemic shut down much of the West in March 2020, Amazon pledged to remove products\r\n that claimed to cure the coronavirus. However, items that promote misinformation a… [+2105 chars]',
        },
        {
          source: {
            id: 'engadget',
            name: 'Engadget',
          },
          author: 'Jon Fingas',
          title: 'Apple Wallet is getting verifiable COVID-19 vaccination cards',
          description: "There's a real chance you'll need proof of a COVID-19 vaccination to enter certain venues, and Apple is hoping it can save you the hassle of digging up an email or carrying a physical card in your pocket. The company is bringing verifiable COVID-19 vaccinatio…",
          url: 'https://www.engadget.com/apple-wallet-vaccination-card-193036015.html',
          urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-09/de433000-1b0e-11ec-b76e-49f69e73b93e',
          publishedAt: '2021-09-21T19:30:36Z',
          content: "There's a real chance you'll need proof of a COVID-19 vaccination to enter certain venues, and Apple is hoping it can save you the hassle of digging up an email or carrying a physical card in your po… [+1257 chars]",
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Nobel Medicine Prize for COVID-19 vaccine?',
          description: 'Scientists behind COVID-19 vaccines could be in the running to win the Nobel Prize for Medicine even though the pandemic is far from over.Some scientists say it is just a matter of time: If the work that went into developing the vaccines is not recognised whe…',
          url: 'https://techncruncher.blogspot.com/2021/10/nobel-medicine-prize-for-covid-19.html',
          urlToImage: null,
          publishedAt: '2021-10-01T11:14:00Z',
          content: 'Scientists behind COVID-19 vaccines could be in the running to win the Nobel Prize for Medicine even though the pandemic is far from over.\r\nSome scientists say it is just a matter of time: If the wor… [+3393 chars]',
        },
        {
          source: {
            id: null,
            name: 'Lifehacker.com',
          },
          author: 'Beth Skwarecki',
          title: 'Do Vaccines Also Protect Against Long COVID?',
          description: 'The most important thing that the COVID vaccines do is prevent deaths and severe illness from COVID-19. The next most important thing they do is prevent many cases of milder illness—a job they’re not perfect at, but it’s still far better to be vaccinated than…',
          url: 'https://lifehacker.com/do-vaccines-also-protect-against-long-covid-1847675530',
          urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ae582963340dd2380ca5904b223b46b4.jpg',
          publishedAt: '2021-09-14T20:30:00Z',
          content: 'The most important thing that the COVID vaccines do is prevent deaths and severe illness from COVID-19. The next most important thing they do is prevent many cases of milder illnessa job theyre not p… [+3306 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Sinovac’s COVID-19 vaccine highly effective against serious illness: study',
          description: 'Sinovac’s COVID-19 vaccine is highly effective against serious illness, although rival shots from Pfizer/BioNTech and AstraZeneca showed better protection rates, a large real world study from Malaysia showed.The latest data is a boost to the Chinese firm, who…',
          url: 'https://techncruncher.blogspot.com/2021/09/sinovacs-covid-19-vaccine-highly.html',
          urlToImage: null,
          publishedAt: '2021-09-24T11:14:00Z',
          content: 'Sinovac’s COVID-19 vaccine is highly effective against serious illness, although rival shots from Pfizer/BioNTech and AstraZeneca showed better protection rates, a large real world study from Malaysi… [+2555 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'COVID-19 pill developers aim to top Merck, Pfizer efforts',
          description: 'As Merck and Pfizer prepare to report clinical trial results for experimental COVID-19 antiviral pills, rivals are lining up with what they hope will prove to be more potent and convenient oral treatments of their own.Enanta Pharmaceuticals, Pardes Bioscience…',
          url: 'https://techncruncher.blogspot.com/2021/09/covid-19-pill-developers-aim-to-top.html',
          urlToImage: null,
          publishedAt: '2021-09-28T14:14:00Z',
          content: 'As Merck and Pfizer prepare to report clinical trial results for experimental COVID-19 antiviral pills, rivals are lining up with what they hope will prove to be more potent and convenient oral treat… [+5101 chars]',
        },
        {
          source: {
            id: null,
            name: 'Gizmodo.com',
          },
          author: 'Victoria Song',
          title: 'Apple Will Soon Let You Store Your Covid-19 Vaccine Card in Your iPhone Wallet',
          description: 'After you install iOS 15 on your iPhone, you’ll be able to store verifiable versions of your covid-19 vaccination and test results records in the Health app. Later this year, an iOS 15 update will also allow you to add and present a verifiable covid-19 vaccin…',
          url: 'https://gizmodo.com/apple-will-soon-let-you-store-your-covid-19-vaccine-car-1847717656',
          urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/346dae8b2da5f3897519b132c0a8710d.jpg',
          publishedAt: '2021-09-21T20:02:00Z',
          content: 'After you install iOS 15 on your iPhone, youll be able to store verifiable versions of your covid-19 vaccination and test results records in the Health app. Later this year, an iOS 15 update will als… [+3009 chars]',
        },
        {
          source: {
            id: null,
            name: 'Gizmodo.com',
          },
          author: 'Matt Novak',
          title: 'Covid-19 Has Killed as Many Americans as the 1918 Spanish Flu Pandemic',
          description: 'The covid-19 pandemic has killed over 676,000 Americans, surpassing the estimated U.S. deaths from the 1918 Spanish Flu pandemic. And despite rising vaccination rates, it looks like covid-19 is going to kill a lot more Americans before this thing is over.Read…',
          url: 'https://gizmodo.com/covid-19-has-killed-as-many-americans-as-the-1918-spani-1847713517',
          urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/790a42183705166aff2d8d8096d57eff.jpg',
          publishedAt: '2021-09-21T10:00:00Z',
          content: 'The covid-19 pandemic has killed over 676,000 Americans, surpassing the estimated U.S. deaths from the 1918 Spanish Flu pandemic. And despite rising vaccination rates, it looks like covid-19 is going… [+3720 chars]',
        },
        {
          source: {
            id: 'techcrunch',
            name: 'TechCrunch',
          },
          author: 'Ingrid Lunden',
          title: 'Seqera Labs grabs $5.5M to help sequence Covid-19 variants and other complex data problems',
          description: 'Bringing order and understanding to unstructured information located across disparate silos has been one of more significant breakthroughs of the big data era, and today a European startup that has built a platform to help with this challenge specifically in …',
          url: 'http://techcrunch.com/2021/09/07/seqera-labs-grabs-5-5m-to-help-sequence-covid-19-variants-and-other-complex-data-problems/',
          urlToImage: 'https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1210894009.jpeg?w=640',
          publishedAt: '2021-09-07T11:29:57Z',
          content: 'Bringing order and understanding to unstructured information located across disparate silos has been one of more significant breakthroughs of the big data era, and today a European startup that has b… [+6726 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Merck’s COVID-19 pill cuts risk of death, hospitalization by 50%: study',
          description: 'Merck’s experimental oral drug for COVID-19, molnupiravir, reduced by around 50% the chance of hospitalization or death for patients at risk of severe disease, according to interim clinical trial results announced on Friday.Merck and partner Ridgeback Biother…',
          url: 'https://techncruncher.blogspot.com/2021/10/mercks-covid-19-pill-cuts-risk-of-death.html',
          urlToImage: null,
          publishedAt: '2021-10-01T12:14:00Z',
          content: 'Merck’s experimental oral drug for COVID-19, molnupiravir, reduced by around 50% the chance of hospitalization or death for patients at risk of severe disease, according to interim clinical trial res… [+3516 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'AstraZeneca COVID-19 vaccine shows 74% efficacy in large US trial',
          description: 'AstraZeneca’s COVID-19 vaccine demonstrated 74% efficacy at preventing symptomatic disease, a figure that increased to 83.5% in people aged 65 and older, according to long-awaited results of the company’s US clinical trial published on Wednesday.Overall effic…',
          url: 'https://techncruncher.blogspot.com/2021/09/astrazeneca-covid-19-vaccine-shows-74.html',
          urlToImage: null,
          publishedAt: '2021-09-30T13:14:00Z',
          content: 'AstraZeneca’s COVID-19 vaccine demonstrated 74% efficacy at preventing symptomatic disease, a figure that increased to 83.5% in people aged 65 and older, according to long-awaited results of the comp… [+2349 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Heart inflammation rates higher after Moderna COVID-19 vaccine: Canada data',
          description: 'Canadian health officials said on Friday data suggests reported cases of rare heart inflammation were relatively higher after Moderna’s COVID-19 vaccine compared with the Pfizer/BioNTech shots.The data also indicated heart inflammation occurs more often in ad…',
          url: 'https://techncruncher.blogspot.com/2021/10/heart-inflammation-rates-higher-after.html',
          urlToImage: null,
          publishedAt: '2021-10-02T12:14:00Z',
          content: 'Canadian health officials said on Friday data suggests reported cases of rare heart inflammation were relatively higher after Moderna’s COVID-19 vaccine compared with the Pfizer/BioNTech shots.\r\nThe … [+952 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Study shows antibody growth from AstraZeneca, Sputnik Light COVID-19 vaccine mix',
          description: 'A small-scale clinical study of the combined use of the AstraZeneca and Sputnik Light vaccines against COVID-19 has shown strong antibody growth in a majority of the study’s participants, the Russian Direct Investment Fund said on Monday.The data was collecte…',
          url: 'https://techncruncher.blogspot.com/2021/09/study-shows-antibody-growth-from.html',
          urlToImage: null,
          publishedAt: '2021-09-27T11:14:00Z',
          content: 'A small-scale clinical study of the combined use of the AstraZeneca and Sputnik Light vaccines against COVID-19 has shown strong antibody growth in a majority of the study’s participants, the Russian… [+711 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Cancer patients on chemotherapy have lower immune response to COVID-19 vaccine, study finds',
          description: 'The COVID-19 pandemic has been an especially stressful time for cancer patients undergoing chemotherapy, which attacks not only the cancer, but also the immune cells needed to defend the body from infections.from News Medical Medical Research News Feed https:…',
          url: 'https://techncruncher.blogspot.com/2021/10/cancer-patients-on-chemotherapy-have.html',
          urlToImage: null,
          publishedAt: '2021-10-03T00:05:00Z',
          content: 'The COVID-19 pandemic has been an especially stressful time for cancer patients undergoing chemotherapy, which attacks not only the cancer, but also the immune cells needed to defend the body from in… [+97 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'Supply chain struggles to keep up iPhone 13 demand as COVID-19 hits Vietnam',
          description: 'A new report by NkkeiAsia says that iPhone 13 buyers are facing “longer-than-expected” delivery time due to the COVID-19 wave in Vietnam and the deployment of a new camera feature.Although reports suggest that iPhone 13 camera parts get priority as Samsung or…',
          url: 'https://techncruncher.blogspot.com/2021/09/supply-chain-struggles-to-keep-up.html',
          urlToImage: 'https://lh5.googleusercontent.com/proxy/C7_9NMR5AtHHbsPPBJ-UnBS9sUOfaa_0-bPXSfrP5fSLf1fX6BXleupJy3yWHEQTe54FHDRbjJfFxKiCL3XobS2u_MFjGW3vddBQAxzuOucz8Mhn2ykhd4OUgVm_rfsIKagHCa40YUxk3N3fA9HoNx7zo-SFz-fJw21XlcHeml8aBiMUzMTHh8s6xVtEqg=w1200-h630-p-k-no-nu',
          publishedAt: '2021-09-29T14:35:00Z',
          content: 'A new report by NkkeiAsia says that iPhone 13 buyers are facing “longer-than-expected” delivery time due to the COVID-19 wave in Vietnam and the deployment of a new camera feature.\r\nAlthough reports … [+461 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'COVID-19 may trigger hyperglycemia by disrupting key metabolic signals to cause severe disease',
          description: 'COVID-19 may bring high risks of severe disease and death in many patients by disrupting key metabolic signals and thereby triggering hyperglycemia, according to a new study from researchers at Weill Cornell Medicine and NewYork-Presbyterian.from News Medical…',
          url: 'https://techncruncher.blogspot.com/2021/10/covid-19-may-trigger-hyperglycemia-by.html',
          urlToImage: null,
          publishedAt: '2021-10-03T02:05:00Z',
          content: 'COVID-19 may bring high risks of severe disease and death in many patients by disrupting key metabolic signals and thereby triggering hyperglycemia, according to a new study from researchers at Weill… [+131 chars]',
        },
        {
          source: {
            id: null,
            name: 'Blogspot.com',
          },
          author: 'noreply@blogger.com (Unknown)',
          title: 'CanSinoBIO COVID-19 vaccine, tested at lower dosage, safe for children: study',
          description: 'CanSinoBIO’s single-dose COVID-19 vaccine, given at a lower dosage than that for adults, is safe and triggers an immune response in children aged 6-17, results from a small trial showed.Researchers decided to lower the dosage after a few participants develope…',
          url: 'https://techncruncher.blogspot.com/2021/09/cansinobio-covid-19-vaccine-tested-at.html',
          urlToImage: null,
          publishedAt: '2021-09-24T10:14:00Z',
          content: 'CanSinoBIO’s single-dose COVID-19 vaccine, given at a lower dosage than that for adults, is safe and triggers an immune response in children aged 6-17, results from a small trial showed.\r\nResearchers… [+1529 chars]',
        },
        {
          source: {
            id: null,
            name: 'New York Times',
          },
          author: 'The New York Times',
          title: 'Covid-19 Live Updates: A Winter Virus Plan for England',
          description: 'Prime Minister Boris Johnson is intent on avoiding a new lockdown, but experts say he is unlikely to rule one out when he unveils a strategy Tuesday.',
          url: 'https://www.nytimes.com/live/2021/09/14/world/covid-delta-variant-vaccine',
          urlToImage: 'https://static01.nyt.com/images/2021/09/14/world/14virus-briefing-lede/14virus-briefing-lede-facebookJumbo.jpg',
          publishedAt: '2021-09-14T09:09:48Z',
          content: 'Prime Minister Boris Johnson is expected on Tuesday to outline a winter coronavirus strategy for England designed to prevent any new surge in cases from overwhelming the National Health Service, whil… [+5895 chars]',
        },
        {
          source: {
            id: null,
            name: 'Gizmodo.com',
          },
          author: 'Ed Cara',
          title: 'Merck and Ridgeback Say Their Covid-19 Pill Cuts Chance of Hospitalization and Death by Half',
          description: 'A pill that can effectively prevent the worst outcomes of covid-19 may finally be on the way. Read more...',
          url: 'https://gizmodo.com/merck-and-ridgeback-say-their-covid-19-pill-cuts-chance-1847781450',
          urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7efe41e091a083ff78d789382f4ac67b.jpg',
          publishedAt: '2021-10-01T15:08:00Z',
          content: 'A pill that can effectively prevent the worst outcomes of covid-19 may finally be on the way. \r\nOn Friday, pharmaceutical companies Merck and Ridgeback Biotherapeutics announced the preliminary resul… [+4686 chars]',
        },
        {
          source: {
            id: null,
            name: 'New York Times',
          },
          author: 'Tom Frieden',
          title: 'I Ran the CDC. Here’s How to Prove That Americans Are Vaccinated.',
          description: 'By issuing Covid-19 vaccination verification guidelines, the federal government can help verifiers ensure that mandates are effective.',
          url: 'https://www.nytimes.com/2021/09/21/opinion/cdc-coronavirus-vaccine.html',
          urlToImage: 'https://static01.nyt.com/images/2021/09/21/opinion/21Frieden/21Frieden-facebookJumbo.jpg',
          publishedAt: '2021-09-21T12:52:59Z',
          content: 'So far, the White House has rejected federal verification guidelines. Vaccination verification in the United States, however, is not new. Every state has an immunization information system, which con… [+2098 chars]',
        },
      ],
    },
  },
  getters: {
    getNewsData: (state) => state.newsData,
  },
  mutations: {
    setNewsData(state, payload) {
      state.newsData = payload;
    },
  },
  actions: {
    async getAllNewsData({ dispatch, commit }, params) {
      try {
        dispatch('loading/setLoadingStatus', true, { root: true });
        const response = await api.everyThing(params);
        dispatch('loading/setLoadingStatus', false, { root: true });
        const { data } = response;
        commit('setNewsData', data);
      } catch (error) {
        dispatch('loading/setLoadingStatus', false, { root: true });
        dispatch('notification/spawnNotification', {
          status: 'active',
          type: 'error',
          text: error,
          cancelText: '',
          confirmText: '確認',
          cancelCallback: '',
          confirmCallback: () => {
            dispatch('notification/closeNotification', null, { root: true });
          },
        }, { root: true });
      }
    },
  },
};

export default {
  ...News,
};
