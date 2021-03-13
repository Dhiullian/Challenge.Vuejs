export default {
  name: 'Banner',
  data: () => ({
    banner: '',
    windowWidth: window.innerWidth
  }),
  created(){
    this.banner = `https://picsum.photos/${this.windowWidth}/600?blur`
  }
}