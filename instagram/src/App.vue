<template>
  <div id="app">
    <div class="feed-article">
      <FeedHeader></FeedHeader>
      <FeedContent></FeedContent>
      <FeedNav></FeedNav>
      <FeedComment></FeedComment>  

    </div>
  </div>
</template>

<script>
import FeedHeader from './components/FeedHeader';
import FeedContent from './components/FeedContent';
import FeedNav from'./components/FeedNav';
import FeedComment from './components/FeedComment';
export default {
  name: 'app',
  components: {
    FeedHeader,
    FeedContent,
    FeedNav,
    FeedComment,
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}
#app{
  margin: 0 auto;
  width: 1080px;
}
.feed-article{
  width:616px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  position: relative;

}
.blind{
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
}
</style>
