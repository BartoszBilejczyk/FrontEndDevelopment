import stocks from '../../data/stocks'
import axios from 'axios'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

const state = {
  stocks: [],
  liveStocks: [],
  companies: [
    'RELX',
    'RENX',
    'MSFT',
    'CAT',
    'INDEX_IXIC',
    'AGG',
    'XLK',
    'PA_HDP',
    'INDEX_GSCP'
    // 'V',
    // 'UNH',
    // 'PG',
    // 'KO',
    // 'GS',
    // 'WMT',
    // 'MRK',
    // 'VZ',
    // 'UTX',
    // 'TRV',
    // 'DIS',
    // 'BA',
    // 'HD',
    // 'DD',
    // 'MMM',
    // 'PFE',
    // 'NKE',
    // 'MCD',
    // 'JPM',
    // 'INTC'
  ]
}

// axios.get('https://www.quandl.com/api/v3/datasets.json?database_code=FSE&per_page=100&sort_by=id&page=1&api_key=zCzq9ac25fyL89JXt7Rs')
//   .then(response => {
//     state.liveStocks = response.data.datasets
//     console.log(response.data.datasets)
//   })
//   .catch(error => {
//     console.log(error)
//   })

const mutations = {
  // live from quandl api

  'SET_LIVE_STOCKS' (state, {data}) {
    state.liveStocks = state.liveStocks.concat(data)
  },

  // set stocks - 1) when rendered 2) when end of the day to randomize
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RANDOM_STOCKS' (state) {
    state.stocks.forEach(stock => {
      // Mark G's solution for rounding http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places
      stock.price = +(Math.round(stock.price * Math.pow(((1 + Math.random()) - 0.47), 0.05) + 'e+2') + 'e-2')
    })
  }
}

const actions = {

  loadLiveStocks: ({commit}) => {
    // let today = moment().subtract(2, 'days').format('YYYY-MM-DD')
    for (let i = 0; i < state.companies.length; i++) {
      axios.get(`http://dev.markitondemand.com/Api/v2/GOOG`)
        .then(response => {
          commit('SET_LIVE_STOCKS', {
            data: response
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  // loadLiveStocks: ({commit}) => {
  //   let today = moment().subtract(2, 'days').format('YYYY-MM-DD')
  //   for (let i = 0; i < 30; i++) {
  //     axios.get(`https://www.quandl.com/api/v3/datasets/EOD/${state.companies[i]}.json?start_date=${today}&api_key=zCzq9ac25fyL89JXt7Rs`)
  //       .then(response => {
  //         commit('SET_LIVE_STOCKS', {
  //           data: response.data.dataset
  //         })
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // },

  // normally would use (context), but I only need commit from the context so ({})
  buyStock: ({commit}, order) => {
    // it will refer to the mutation from portfolio.js
    commit('BUY_STOCK', order)
  },
  // initialize stocks
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('RANDOM_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  },
  liveStocks: state => {
    return state.liveStocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
