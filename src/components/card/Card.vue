 <template>
  <div id="card">
    <img :src="dataCard.image" alt="image" />

    <div class="about">
      <h3 class="title">
        {{ dataCard.title }}
      </h3>

      <p>{{ dataCard.body }}</p>
    </div>

    <div class="check">
      <button class="btn-continue">Continuar</button>
    </div>
  </div>
</template>
 
 <script src="./Card.js" />  
 <style lang="scss" src="./Card.scss" />
 
 
 
 
 