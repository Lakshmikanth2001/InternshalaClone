$(()=>{
    console.log($("#internships"));

    const blur_style = {
        filter:"blur(8px)",
    }

    const normal = {
        filter:""
    }

    $("#internships").mouseover(()=>{
        $("#online_training").dropdown('hide')
        $("#internships").dropdown('show')
    })

    $("#online_training").mouseover(()=>{
        $("#internships").dropdown('hide')
        $("#online_training").dropdown('show')
    })
})