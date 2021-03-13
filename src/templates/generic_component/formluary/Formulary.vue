<template>
  <form id="formulary" @submit.prevent="submit()">
    <div class="box-input" v-for="(data, i) in dataForm" :key="i">
      <label :for="data.id"> {{ data.name }}: </label>
      <input
        v-if="data.type !== 'tel'"
        :type="data.type"
        :name="data.id"
        :id="data.id"
        v-model="data.resp"
        required
      />
      <input
        v-else
        type="tel"
        v-mask="'(##) # ####-####'"
        :name="data.id"
        :id="data.id"
        v-model="data.resp"
        required
      />
    </div>

    <div class="send">
      <button class="btn-continue" type="submit">Enviar</button>
    </div>
  </form>
</template>

<script src="./Formulary.js" />
<style lang="scss" src="./Formulary.scss" />