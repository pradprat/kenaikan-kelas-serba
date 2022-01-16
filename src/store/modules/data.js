import data_siswa from "../../assets/data/data_siswa.json"

const state = {
    data_siswa: data_siswa
};

const getters = {
    getAllSiswa: (state) =>
    {
        return state.data_siswa
    },
    getSiswaByNisn: (state) => (nisn) =>
    {
        return state.data_siswa.find(data => data.nisn === nisn)
    }
};

const actions = {
    // login({ commit }, nameSiswa)
    // {
    //     console.log(nameSiswa);
    //     commit("setLogin", nameSiswa)
    // },
    // logout({ commit })
    // {
    //     commit("setLogout")
    // }
};

const mutations = {
    // setLogin: (state, nameSiswa) =>
    // {
    //     state.authed = true
    //     state.nameSiswa = nameSiswa
    // },
    // setLogout: (state) =>
    // {
    //     state.authed = false
    //     state.nameSiswa = ""

    // },
};

export default {
    state,
    getters,
    actions,
    mutations
};