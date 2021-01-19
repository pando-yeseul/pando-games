<template>
    <div id="footer">
      <p>Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5</p>
    </div>
</template>
<script>
export default {
    name : 'Footer',
}
</script>
<style>
    #footer{
    background:#3f3f3f;
    height: 80px;
    padding:20px;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #footer p{
    color:#999;
    text-align: center;
  }
</style>