export default {
    props: ['dataForm'],
    methods: {
        submit() {
            this.$toast.open({
                message: 'Consultoria agendada com sucesso',
                type: 'success',
                duration: 3000,
                dismissible: true,
                position: 'top-right'
            })
            this.clearForm();
        },
        clearForm(){
            this.dataForm.forEach(el => {
                el.resp = null
            });
        }
    }
}