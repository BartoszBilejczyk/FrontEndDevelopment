<template lang="html">
  <v-nav nav-class="blue" fixed="true">
    <div class="container">
      <ul class="left">
        <router-link to="/" activeClass="active" tag="li"><a>Dashboard</a></router-link>
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <ul class="right">
            <li>
          <a href="#!">End day</a>
        </li>
        <li>
          <v-btn v-dropdown:dropdown>Save / Load</v-btn>
          <v-dropdown id="dropdown">
            <li>
              <a href="#!">Save</a>
            </li>
            <li>
              <a href="#!">Load</a>
            </li>
          </v-dropdown>
        </li>
      </ul>
      <v-side-nav id="side2" slot="side-nav"></v-side-nav>
    </div>
  </v-nav>
</template>
