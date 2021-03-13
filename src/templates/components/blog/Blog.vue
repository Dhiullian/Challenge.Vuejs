<template>
  <div id="blog">
    <h1>Blog</h1>

    <div class="posts">
      <Card v-for="(card, i) in pagination" :key="i" :dataCard="card" />
    </div>

    <div class="box-pagination" v-if="!loading">
      <jw-pagination
        :pageSize="4"
        :items="postes"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>

<script src="./Blog.js" />
<style lang="scss" src="./Blog.scss" />