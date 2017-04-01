const state = {
  funds: 10000,
  // our portfolio, not all stocks available
  stocks: []
}

const mutations = {
  // three properties come from stock.vue. I will get the const order
  'BUY_STOCK' (state, {stockId, stockQuantity, stockPrice}) {
    // check if I have this stock already. This will return true if stockId added is the same as stockId that is already in portfolio
    const record = state.stocks.find(element => element.id === stockId)
    if (record) {
      // I have the stock, don't push new
      record.quantity += stockQuantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQuantity
      })
    }
    state.funds -= stockPrice * stockQuantity
  },
  'SELL_STOCK' (state, {stockId, stockQuantity, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId)
    // possible to sell only if I have more than I want to sell
    if (record.quantity > stockQuantity) {
      record.quantity -= stockQuantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * stockQuantity
  }
}

const actions = {
  sellStock ({commit}, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  // I wanna be able to get my stock portfolio
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
