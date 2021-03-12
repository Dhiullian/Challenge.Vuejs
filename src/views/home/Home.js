import Banner from '../../components/banner/Banner.vue'
import BoxSeeMore from '../../components/boxSeeMore/BoxSeeMore.vue'
import BoxPlanning from '../../components/boxPlanning/BoxPlanning.vue'
import Blog from '../../components/blog/Blog.vue'

export default {
  name: 'Home',
  components: { Banner, BoxSeeMore, BoxPlanning, Blog },
  async created() {
    const res = await this.REQUESTS.gets.getPosts()
    console.log(res);
  }
}