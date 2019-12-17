<template>
    <div class="article-nav">
        <span>
            <button>
                <span class="article-heart">
                </span>
            </button>
        </span>
        <span>
            <button>
                <!-- <span class="blind">댓글</span> -->
                <span class="article-comment"></span>
            </button>
        </span>
        <span >
            <button>
                <span class="article-share"></span>
            </button>
        </span>
        <span class="share-pos">
            <button>
                <span class="article-save"></span>
            </button>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
    height: 40px;
    width: 40px;
    border:0;
    outline:none;
}
.article-nav{
    padding-left: 16px;
    padding-right: 16px;
    height: 40px;
    /* position: relative; */
    border-top: 1px solid gray;
    /* border-bottom: 1px solid gray; */
    
}
.article-nav .article-heart{
    width:24px;
    height:24px;
    display:inline-block;
    background-image: url('../../public/icons.png');
    background-size: 411px 393px;
    background-position: -275px -294px;
}
.article-comment{
    width:24px;
    height:24px;
    display:inline-block;
    background-image: url('../../public/icons.png');
    background-size: 411px 393px;
    background-position: -301px -254px;
}
.share-pos{
    float:right;
}
.article-share{
     width:24px;
    height:24px;
    display:inline-block;
    background-image: url('../../public/icons.png');
    background-size: 411px 393px;
    background-position: -125px -344px;
}
.article-save{
    width:24px;
    height:24px;
    display:inline-block;
    background-image: url('../../public/icons.png');
    background-size: 411px 393px;
    background-position: -25px -344px;
}
</style>