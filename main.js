console.log("danielaplassard.com | Produced By Codehaven: code-haven.com");

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

width = window.innerWidth;

if ( width >= 401 && width <= 700) {
    console.log("s screen");
    document.getElementById("front").src = "front2.jpeg";
    document.getElementById("careerh2").innerHTML = "Career Profile";
    document.getElementById("journeyh2").innerHTML = "My Journey";
    document.getElementById("j").innerHTML = "<div id='j' class='j reveal'><div class='j2'><div class='j2i'><h2>Tgarage</h2><div class='j1'><img class='wq' src='j1.jpeg'></div><p>Sydney, NSW Octobre 2022 - December 2023</p><h3>Associate Director</h3></div><div class='j2m'><ul><li>Work on actionable ad hoc and strategic projects for clients, projects pipeline management and profitabillity reports. Quant and quol work.</li><li>Daily hands-on work proposols, project deliveries. In charge of account budget.</li><li>Ad hoc projects and building of online communities. Daily use of Excel and Q.</li><li>Management and leadership, two direct reports.</li><li>Full responsibility of a large U&A, segmentation, online and face to face presentations to different stakeholders. Brand deep dives.</li></ul></div></div></div>";
    document.getElementById("j2").innerHTML = "<div id='j2' class='j reveal'><div class='j2'><div class='j2i'><h2>French a la Carte</h2><div class='j1'><img src='j5.png'></div><p>St Ives, NSW January 2021 - Septembre 2022</p><h3>French Teacher</h3></div><div class='j2m'><ul><li>A la carte French lessons for a high-ptofile senior public on the Northern Beaches: French vocabulary and grammer mixed with culture, general French and conversation classes, weekly update on French news, politics etc.</li><li>Two 4-days, only French immersions in the Hunter Valley, full client servicing to intermediate and advanced students in a Covid-safe envioronment.</li></ul></div></div></div>";
    document.getElementById("j3").innerHTML = "<div id='j3' class='j reveal'><div class='j2'><div class='j2i'><h2>Killarney Heights Public School</h2><div class='j1'><img src='j6.png'></div><p>Killarney Heights, NSW 2020 -2021</p><h3>Volunteering: Ethics Teacher</h3></div><div class='j2m'><ul><li>Delivering the Ethics curriculum to Year 3 and Year 2 students.</li></ul></div></div></div>";
    document.getElementById("j4").innerHTML = "<div id='j4' class='j reveal'><div class='j2'><div class='j2i'><h2>Ontario Francophone Schools</h2><div class='j1'><img src='j7.png'></div><p>Ontario, Canada 2017 - 2018</p><h3>Supply Teacher</h3></div><div class='j2m'><ul><li>Supply teacher across all primary school age ranges in Ontario, Canada</li></ul></div></div></div>";
    document.getElementById("j5").innerHTML = "<div id='j5' class='j reveal'><div class='j2'><div class='j2i'><h2>Toronto Accueil</h2><div class='j1'><img src='j8.png'></div><p>Toronto, Canada 2014 - 2017</p><h3>Volunteering: Vice President</h3></div><div class='j2m'><p>Toronto Accueil is an organisation run by volunteers, under the FIAFE/ French expats umbrella, that provides services and activities to expatriate communities, predominatly from France and Belgium.</p><ul><li>Completed contact with members and a number of key stakeholders including the French Consulate, French Schools and relevent association and groups.</li></ul></div></div></div>";
    document.getElementById("j6").innerHTML = "<div id='j6' class='j reveal'><div class='j2'><div class='j2i'><h2>Gfk Custome Research</h2><div class='j1'><img src='j2.jpeg'></div><p>Paris, France 2012 - 2013</p><h3>Market Research Manager</h3></div><div class='j2m'><ul><li>Directly in charge of several FMCG clients and one luxury client. Daily work with a global market leader in the food industry, supplying both daily breakefast products and highly seasonal treats to different targets.</li><li>Detailed work on innovation funnel, and media reach of seasonal or non-seasonal treats to different targets.</li><li>Supervision of quant packaged or ad-hoc research from client brief to full results presentation, in-person presentations involving key decision makers. Combined quant and qual projects for some clients</li><li>Managed a team of 6 Research Analysts and Group Managers.</li><li>Completed business developement activities: prospection, proposal writing, online packeged products presentation. Daily use of Salesforce.</li><li>Completed a broad range of client projects including scoping, analysis, benchmarking, reporting, recommendations, presentations and post implementation reviews.</li></ul></div></div></div>";
    document.getElementById("j7").innerHTML = "<div id='j7' class='j reveal'><div class='j2'><div class='j2i'><h2>Ipsos</h2><div class='j1'><img src='j3.png'></div><p>France 2007 - 2012</p><h3>Market Research Manager</h3></div><div class='j2m'><ul><li>Directly in charge of 2 major FMCG Key Account clients,  one in the food catagory and one in beuty. Supervision of quant packaged or ad-hoc research from client brief to full results presentation, in-person presentations in several countries. Mostly multi-country projects, involving one or several project managers.</li><li>Combined quant and qual research for high-end positioned global brands.</li><li>Managed a team of 4 Research Analysts.</li></ul></div></div></div>";
    document.getElementById("j8").innerHTML = "<div id='j8' class='j reveal'><div class='j2'><div class='j2i'><h2>Nielsen IQ</h2><div class='j1'><img src='j4.png'></div><p>Belgium 2005 - 2007</p><h3>Senior Analyst</h3></div><div class='j2m'><ul><li>Extension market research for multiple international clients including volumetric forecasts.</li><li>Daily analyse on Nielson and panel data.</li></ul></div></div></div>";
    document.getElementById("contacth2").innerHTML = "<span class='nowrap'>Follow Me on</span> <span class='nowrap'>My Journey</span>";
}
