<template>
    <div class="content-header">
        <div class="user-pic">       
            <div class="pic-border">     
                <img class="profile-pic" src='../../public/taek.jpg'>
                <span class="blind">프로필 이미지</span>
            </div>
        </div>
        <div class="user-info">
            <div class="user-id">
                pius
            </div>
            <div class="user-place">
                부산
            </div>
            
        </div>
        <div class="ellipsis-menu">
                <button>
                    <span class="ellipsis-icon"></span>
                </button>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content-header{
    padding: 16px;
    position: relative;
}

.user-pic{
    width: 33px; 
    height: 32px;    
    display: inline-block
}
.pic-border{
    border-radius:10px; 
}
.user-pic .profile-pic{
    width:100%;
    height:100%;
    display: inline-block;
    border-radius: 50%;
    /* background-image: url(); */
}
.user-pic .user-canvas{
    position: absolute; 
    top: -5px; 
    left: -5px; 
    width: 42px; 
    height: 42px; 
    background-color: transparent;
}
.real-img{
    width:100%;
    height:100%;
}
.user-info{
    margin-left: 16px;
    height:33px;
    position: absolute;
    top: 17px;
    left: 49px;
}
.user-id{
    font-size:14px;
}
.user-place{
    font-size:12px;
}
.ellipsis-menu{
    float: right;
    
}
.ellipsis-menu button{
    border:0;
    outline:none;
}
.ellipsis-icon{
    display:inline-block;
    width:24px;
    height: 24px;
    background-image: url('../../public/icons.png');
    background-size: 411px 393px;
    background-position: -175px -319px;
}
</style>