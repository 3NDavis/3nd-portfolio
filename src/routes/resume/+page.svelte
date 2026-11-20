<script>
    import pdfUrl from './resume.pdf?url';
</script>

<style>
    h1{
        font-size: 4vw;
    }
</style>

<div class="grid grid-row-1 justify-center">
    <h1 class="text-center">Resumé</h1>
    <iframe src={pdfUrl} width="800" height="1000" title="PDF"/>
</div>