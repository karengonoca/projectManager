module.exports = {
    list: async(req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Lista de tareas'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en lista de tareas!'
            })
           }
    },

    store: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea guardada'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en store-task!'
            })
           }
    },
    
    detail: async(req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Detalle de la tarea '
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en detail-task!'
            })
           }
    },

    update: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea actualizada '
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en task-update!'
            })
           }
    },

    remove: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea eliminada'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en task-remove!'
            })
           }
    },
    changeState: async(req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea completada'
            })
           } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en changeState!'
            })
           }
    }

    
}