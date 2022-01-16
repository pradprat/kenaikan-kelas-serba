
const state = {
    authed: false,
    siswa: undefined
};

const getters = {
    isAuthed: (state) =>
    {
        return state.authed
    },
    getSiswa: (state) =>
    {
        return state.siswa
    },
};

const actions = {
    loginSiswa({ commit }, siswa)
    {
        console.log(siswa);
        commit("setLogin", siswa)
    },
    logoutSiswa({ commit })
    {
        commit("setLogout")
    }
};

const mutations = {
    setLogin: (state, siswa) =>
    {
        state.authed = true
        state.siswa = siswa
    },
    setLogout: (state) =>
    {
        state.authed = false
        state.siswa = ""

    },
};

export default {
    state,
    getters,
    actions,
    mutations
};