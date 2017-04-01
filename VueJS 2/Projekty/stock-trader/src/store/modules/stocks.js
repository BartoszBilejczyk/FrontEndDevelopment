import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
