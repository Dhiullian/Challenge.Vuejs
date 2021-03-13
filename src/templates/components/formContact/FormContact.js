import Formulary from '../../generic_component/formluary/Formulary.vue'

export default {
    name: 'FormContact',
    components: { Formulary },
    data: () => ({
        formData: [
            { id: 'name', name: 'Nome', type: 'text' },
            { id: 'email', name: 'Email', type: 'email' },
            { id: 'civil-state', name: 'Estado Civil', type: 'text' },
            { id: 'profission', name: 'Profissão', type: 'text' },
            { id: 'tel', name: 'Telefone/Whatsapp', type: 'tel' },
            { id: 'income', name: 'Renda Mensal', type: 'text' },
        ]
    }),
}