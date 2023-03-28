<template>
    <div class="point-over" @click="closeModal($event)">
        <div class="point">
            <h6 class="text-center my-3">Assign Points for ( Afonime Royal )</h6>
            <hr>
            <div class="point-form-holder">
                <div class="week-row">
                    <div class="">
                        <b>Select Week : </b></div>
                    <div class="">
                        <select class=" form-control ">
                            <option value="">Select Week</option>
                            <option value=""> 1</option>
                            <option value="">2</option>

                        </select>
                    </div>
                </div><hr>
                <div class="point-real">
                    <div class="">Goals :</div>
                    <div class="">
                        <input type="number"  class="form-control">
                    </div>
                </div><hr>
                <div class="point-real">
                    <div class="">Assists :</div>
                    <div class="">
                        <input type="number" class="form-control">
                    </div>
                </div><hr>
                <div class="point-real">
                    <div class="">Yellow Card :</div>
                    <div class="">
                        <input type="checkbox" class="form-control">
                    </div>
                </div><hr>
                <div class="point-real">
                    <div class="">Red Card :</div>
                    <div class="">
                        <input type="checkbox" class="form-control">
                    </div>
                </div><hr>
                <div class="point-real">
                    <div class="">Own Goal :</div>
                    <div class="">
                        <input type="checkbox" class="form-control">
                    </div>
                </div><hr>
                <div class="point-real">
                    <div class="">Penalty Miss :</div>
                    <div class="">
                        <input type="checkbox" class="form-control">
                    </div>
                </div><hr>

                <button class="btn btn-primary py-2 my-3" style="margin:0 auto; display: block;" >Submit Point</button>
              

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PointModal',
    methods : {
        closeModal(event){
            if (!event.target.closest('.point')) {
        // emit the "close-modal" event only if the clicked element is outside the modal
            this.$emit('close-modal')
        }
    }
    }
}
</script>

<style scoped lang="scss">
    .point-over{
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(62, 61, 61, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;

        .point{
            width: 500px;
            height: 500px;
            background-color: #fff;
            overflow: auto;
            border-radius: 10px;
            padding: 20px 0;
        }
    }
    
    .week-row{
        div{
            width: 50%;
            padding: 0 40px ;
        }
        width: 100%;
        display: flex;
        align-items: center;
        // background-color: gray;
        justify-content: space-around;
    }
    .point-real{
        div{
            width: 50%;
            padding: 0 40px ;
        }
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>