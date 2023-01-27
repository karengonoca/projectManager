module.exports = {
    list: async(req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Lista de proyectos'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en lista de proyectos!'
            })
           }
    },

    store: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Proyecto guardado'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en store!'
            })
           }
    },
    
    detail: async(req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Detalle del proyecto '
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en detail!'
            })
           }
    },

    update: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Proyecto actualizado '
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en project-update!'
            })
           }
    },

    remove: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Proyecto eliminado'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en project-remove!'
            })
           }
    },

    addCollaborator: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Colaborador agregado'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en collaborator-add!'
            })
           }
    },

    removeCollaborator: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Colaborador eliminado'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en collaborator-remove!'
            })
           }
    }

    
}