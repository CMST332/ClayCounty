    //global variable to search by township range and section formatted as such
    //[township,range,section]
    var locationSearch = [0,0,0];
    var locationSearchUse = false;
    
    document.getElementById("topo").style.display ="block";

    function map1(){
        const topo = document.getElementById("topo");
        const sec1 =document.getElementById("s1");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec1.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 6;
        locationSearch[1] = 1;
        searchQueryJS();
    }

    function map2(){
        const topo = document.getElementById("topo");
        const sec2 =document.getElementById("s2");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec2.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 6;
        locationSearch[1] = 2;
        searchQueryJS();
    }

    function map3(){
        const topo = document.getElementById("topo");
        const sec3 =document.getElementById("s3");
        const mBack = document.getElementById("mapBack");

        if(topo.style.display=="block"){
            topo.style.display ="none",sec3.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 6;
        locationSearch[1] = 3;
        searchQueryJS();
    }

    function map4(){
        const topo = document.getElementById("topo");
        const sec4 =document.getElementById("s4");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec4.style.display = "block",mBack.style.display = "block"}
            
        locationSearchUse = true;
        locationSearch[0] = 6;
        locationSearch[1] = 4;
        searchQueryJS();
    }

    function map5(){
        const topo = document.getElementById("topo");
        const sec5 =document.getElementById("s5");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec5.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 7;
        locationSearch[1] = 1;
        searchQueryJS();
    }

    function map6(){
        const topo = document.getElementById("topo");
        const sec6 =document.getElementById("s6");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec6.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 7;
        locationSearch[1] = 2;
        searchQueryJS();
    }

    function map7(){
        const topo = document.getElementById("topo");
        const sec7 =document.getElementById("s7");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec7.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 7;
        locationSearch[1] = 3;
        searchQueryJS();
    }

    function map8(){
        const topo = document.getElementById("topo");
        const sec8 =document.getElementById("s8");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec8.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 7;
        locationSearch[1] = 4;
        searchQueryJS();
    }

    function map9(){
        const topo = document.getElementById("topo");
        const sec9 =document.getElementById("s9");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec9.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 8;
        locationSearch[1] = 1;
        searchQueryJS();
    }

    function map10(){
        const topo = document.getElementById("topo");
        const sec10 =document.getElementById("s10");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec10.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 8;
        locationSearch[1] = 2;
        searchQueryJS();
    }

    function map11(){
        const topo = document.getElementById("topo");
        const sec11 =document.getElementById("s11");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec11.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 8;
        locationSearch[1] = 3;
        searchQueryJS();
    }

    function map12(){
        const topo = document.getElementById("topo");
        const sec12 =document.getElementById("s12");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec12.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 8;
        locationSearch[1] = 4;
        searchQueryJS();
    }

    function map13(){
        const topo = document.getElementById("topo");
        const sec13 =document.getElementById("s13");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec13.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 9;
        locationSearch[1] = 1;
        searchQueryJS();
    }

    function map14(){
        const topo = document.getElementById("topo");
        const sec14 =document.getElementById("s14");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec14.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 9;
        locationSearch[1] = 2;
        searchQueryJS();
    }

    function map15(){
        const topo = document.getElementById("topo");
        const sec15 =document.getElementById("s15");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec15.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 9;
        locationSearch[1] = 3;
        searchQueryJS();
    }

    function map16(){
        const topo = document.getElementById("topo");
        const sec16 =document.getElementById("s16");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec16.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 9;
        locationSearch[1] = 4;
        searchQueryJS();
    }

    function map17(){
        const topo = document.getElementById("topo");
        const sec17 =document.getElementById("s17");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec17.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 10;
        locationSearch[1] = 1;
        searchQueryJS();
    }

    function map18(){
        const topo = document.getElementById("topo");
        const sec18 =document.getElementById("s18");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec18.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 10;
        locationSearch[1] = 2;
        searchQueryJS();
    }

    function map19(){
        const topo = document.getElementById("topo");
        const sec19 =document.getElementById("s19");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec19.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 10;
        locationSearch[1] = 3;
        searchQueryJS();
    }

    function map20(){
        const topo = document.getElementById("topo");
        const sec20 =document.getElementById("s20");
        const mBack = document.getElementById("mapBack");
    
        if(topo.style.display=="block"){
            topo.style.display ="none",sec20.style.display = "block",mBack.style.display = "block"}

        locationSearchUse = true;
        locationSearch[0] = 10;
        locationSearch[1] = 4;
        searchQueryJS();
    }


    function mapSearch(township, range, section){
        // console.log("Township: " + township + " Range: " + range + " Section: " + section);
        locationSearch[0] = township;
        locationSearch[1] = range;
        locationSearch[2] = section;
        searchMapFull();
    }
