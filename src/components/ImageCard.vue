
<template>
   <li class="image-card">
    <img class="image-card__image" :src="image.url_n" :alt="image.title">
    <div class="image-card__body">
      <p v-if="image.title" class="image-title">{{image.title}}</p>
      <p v-else class="image-title">No Title Found</p>
      <section class="image-date-view-wrapper">
        <p class="image-date">{{image.datetaken}}</p>
        <p class="image-views">Views: {{image.views}}</p>
      </section>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ImageCard',
  props: [ 'image' ]
}
</script>


<style scoped>
.image-card {
    position: relative;
    
  width: calc(33% - 1rem);
  margin: .5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
  background: white;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: .5rem 0;
  }
}
.image-card__image {
display: block;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.image-card__body {
  padding: .5rem 1rem 1rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.image-card:hover .image-card__body {
  opacity: 0.7;
}
.image-title {
  font-weight: bold;
  margin: 0;
   color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.image-owner {
  margin-top: 0;
  font-size: .8rem;
}
.image-title,
.image-owner {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.image-date-view-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image-date,
.image-views {
  margin-bottom: 0;
  font-size: .8rem;
}
</style>

