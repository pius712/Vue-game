<template>
    <div>
        <div class="comment-like"></div>
        <div class="comment-list">
            <ul>
                <li>
                    <div class="writer-id">1</div>
                    <div class="writer-comment">하</div>
                </li>
                <li>
                    <div class="writer-id">2</div>
                    <div class="writer-comment">하</div>
                </li>
                <li>
                    <div class="writer-id">3</div>
                    <div class="writer-comment">하</div>
                </li>
            </ul>
        </div>
        <div class="comment-time">19분전</div>
        <div class="input-container">
            <form class="comment-input">
                <input class="comment-inputBox" type="text" placeholder="댓글 달기..."/>
                <button type="submit">게시</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.comment-like{

}
.comment-list li{
    list-style: none;
}
.comment-list .writer-id{
    display:inline;
}
.comment-list .writer-comment{
    display:inline;
}
.comment-time{
    padding-left: 16px;
    height: 19px;
}
.input-container{
    height: 56px;
    padding: 0 16px;
    border-top: 1px solid #e6e6e6;
    position: relative;
    font-size: 16px;
}
.comment-input{
    width: 582px;
    height: 18px;
   display:inline-block;
   position: absolute;
   top:17px;
   
}

.comment-input .comment-inputBox{
    height: 18px;
    width: 557px;
    border: 0;
    /* position:absolute;
    top:0px;
    left:0px; */
    outline: none;
    
}
.comment-input button{
    float:right;
    border:0;
    padding:0;
    outline: 0;
    color: #3897f0;
    
}
</style>