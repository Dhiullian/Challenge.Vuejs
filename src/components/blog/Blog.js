import { mapState, mapActions } from 'vuex'
import Card from '../card/Card.vue'

export default {
    name: 'Blog',
    components: { Card },
    data: () => ({
        pagination: [],
        loading: true

    }),
    async created() {
        await this.actionGetPostes();
        this.loading = false
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pagination = pageOfItems
            location.href = "#blog"
        },
        ...mapActions(['actionGetPostes'])
    },
    computed: {
        ...mapState(['postes'])
    }
}