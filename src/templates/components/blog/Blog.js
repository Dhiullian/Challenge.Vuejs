import { mapState, mapActions } from 'vuex'
import Card from '../card/Card.vue'

export default {
    name: 'Blog',
    components: { Card },
    data: () => ({
        pagination: [],
        loading: true,
        customLabels: {
            first: 'inicio',
            last: 'fim',
            previous: 'ant',
            next: 'prox'
        }

    }),
    async created() {
        await this.actionGetPostes();
        this.loading = false
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pagination = pageOfItems
        },
        ...mapActions(['actionGetPostes'])
    },
    computed: {
        ...mapState(['postes'])
    }
}