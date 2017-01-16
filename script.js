var references = 0;
var content = {
	intro: "In many urban cities, Walmart stores are a common sight – supercentres attracting flocks of customers to their doors and selling goods for a fraction of what other stores would charge. At first glance, this scenario may seem like it is benefitting everyone; consumers pay less, Walmart makes profit, and the city receives tax revenue from the corporation. However, when it comes to smaller towns that prize their communities, the multinational retailer can quickly destroy the towns’ cultures, economies, and environments. The benefits gained from having Walmart enter a small town are easily outweighed by the detriments to the citizens and government. If the question is whether or not Walmart should be allowed to enter a rural community, the answer is a definite \“no.\”",
	businesses: "The unique local shops that are found in many towns make up the heart of the community. Stores that have been passed down generation to generation have seen decades of customers enjoying the products. By bringing in Walmart into the playing field, most of these stores are not able to compete. With over 80% of its manufacturers in China" + reference("http://www.pbs.org/wgbh/pages/frontline/shows/walmart/") + ", where labour is extremely cheap, Walmart is able to lower its prices below that of local shops, causing customers to leave. One 44-year-old grocery store saw a drop of 30% of its sales when Walmart moved into the neighbourhood" + reference("http://time.com/money/4192512/walmart-stores-closing-small-towns/") + " – losses like these eventually force family-run shops to close down, ruining the livelihoods of the owners. The resulting loss in work and tax revenue from the closed stores may lead to the economic downfall of the town.",
	citizens: "Cheaper goods and more jobs—while Walmart’s proposition may seem lucrative for citizens to accept, the supposed benefits actually bring about more harm than good, especially for the community. The new Walmart will attract those from outside the city to drive to the cheaper retailer, increasing traffic and business of the town. The result of the influx of people is the destruction of the small \"human\" scale of the neighbourhood. The local independent businesses that gave the community its character will be lost, and the increase of traffic will reduce the walkability and pedestrian access of the streets" + reference("https://www.change.org/p/don-t-let-a-walmart-and-3-story-shopping-mall-destroy-kensington-market") + ". The jobs created will be outshadowed by the loss of other jobs in the community; about 1.4 retail jobs are lost for each new one created by Walmart" + reference("http://www.sciencedirect.com/science/article/pii/S0094119007000915") + ". The reduction in the cost of goods does not justify the harms to the community culture.",
	town: "If the municipal government is under the illusion that it will benefit from a new Walmart store, whether it be from the increased tax revenue or the incentives offered (such as building new roads), the town council should reconsider its options. The actual tax revenues from the retailer are actually not so high; The tax-per-acre of a Walmart store comes in at about $8350 per acre—only about one to two hundred dollars more than single family homes" + reference("http://bettercities.net/article/best-bet-tax-revenue-mixed-use-downtown-development-13144") + ". The average loss of over 150 jobs" + reference("https://ilsr.org/walmart-depresses-wages-study-finds/") + " and 15 stores" + reference("http://onlinelibrary.wiley.com/doi/10.1111/j.1540-6237.2012.00857.x/abstract") + " just 14 months after the arrival of Walmart harm the local economy greatly. In addition to this, there is a chance that Walmart may decide to close its store after integrating into the town – the catastrophe brought by this situation is many times worse than just pushing out local businesses" + reference("http://www.businessinsider.com/walmart-closes-hundreds-of-stores-2016-1") + ". Towns could be left without grocery stores, forcing citizens to commute just to buy dinner. Both the immediate and potential risks that Walmart brings upon a small town are too much.",
	walmart: "The benefits to the town suggested by Walmart include: lower product costs, employee benefits, ease of access to goods, increased tax revenue, and other incentives such as roads. One idea not touched upon yet is the advantage of employee benefits. Supposedly, Walmart gives its employees better health insurance and other benefits, but other statistics show that working at the retailer is not such a great occupation. The healthcare premium for Walmart employees requires the worker to pay for a third of their healthcare costs" + reference("http://www.pbs.org/wgbh/pages/frontline/shows/walmart/transform/protest.html") + ", which is too high for most associates. Gender discrimination can be seen in the workplace, with some female employees being paid less than male staff" + reference("https://business-humanrights.org/en/walmart-lawsuit-re-gender-discrimination-in-usa") + ". Mona Williams, a Walmart spokesperson, even said that \”If you are the sole provider for your family … then maybe [Walmart] is not the right place for you.\”",
	social: "As people walk within their neighbourhood, the cultural and cozy feel of small towns can instantly be ruined by a Walmart megastore. Due to its sheer size, Walmart superstores create more urban sprawl and worse towns in general. For the citizen, Walmart also has adverse effects on their health and well-being. On average, Walmart increases the average obesity rate by over 2% per Walmart superstore" + reference("http://www.sciencedirect.com/science/article/pii/S0094119010000690") + ". Furthermore, countries without Walmart superstores have lower crime rates by 18 units per capita" + reference("http://bjc.oxfordjournals.org/content/early/2014/01/09/bjc.azt071.short") + ". Overall, Walmart causes communities to lose their comfort, to be less healthy, and also less safe.",
	economic: "Walmart saves each family $2500 a year" + reference("http://www.forbes.com/sites/timworstall/2013/08/11/walmart-destroys-jobs-yes-but-the-benefits-go-to-consumers-not-the-top/#3a4216bd64c4") + " – it can be very easy to say that Walmart is good for the consumer. However, what that does not take into account is the massive number of jobs that Walmart destroys as it expands. As each store expands, each new Walmart employee displaces other retailers, effectively displacing 2.4% of retail workers by itself" + reference("http://www.sciencedirect.com/science/article/pii/S0094119007000915") + ". At the same time, the jobs that are created are quite poor; many workers are part-time workers, and the turnover rate can be up to 44%" + reference("http://www.pbs.org/wgbh/pages/frontline/shows/walmart/") + ".",
	environmental: "The impact on the environment cannot be taken lightly, since anything that Walmart does is at a ridiculously large scale, the accumulated effects become significant. In terms of the local environment, there will be more cars entering the community to purchase goods from Walmart, leading to more traffic, pollution, and a poorer air quality" + reference("https://www.change.org/p/don-t-let-a-walmart-and-3-story-shopping-mall-destroy-kensington-market") + ". On a global scale, only 2% of Walmart’s electricity comes from renewable resources, and despite the company’s efforts to reduce its impact on the climate, its growth outpaces the meagre actions. The largest detriment is the poor quality of its products, which in turn doubles the trash that households generate, leading to more waste" + reference("http://www.treehugger.com/corporate-responsibility/how-big-gap-between-walmart-sustainability-rhetoric-reality.html") + "."
}
function load() {
	$('.content.intro p').html(content.intro);
	$('.content.businesses p').html(content.businesses);
	$('.content.citizens p').html(content.citizens);
	$('.content.town p').html(content.town);
	$('.content.walmart p').html(content.walmart);
	$('.back .social p').html(content.social);
	$('.back .economic p').html(content.economic);
	$('.back .environmental p').html(content.environmental);
}
function reference(link) {
	references += 1;
	return('<a class="reference" target="_blank" href="'+link+'"><sup>['+references.toString()+']</sup></a>');
}
function updatePage(name) {
	$(".transition").css('width', '100%');
	setTimeout(function() {
		$(".content").css('display', 'none');
		$(name).css('display', 'block');
		setTimeout(function() {
			$(".transition").css('width', '0');
		}, 50);
	}, 300);
}
$(document).ready(function() {
	load();
	$('.menuItem').click(function() {
		var page = $(this).attr('data-link');
		updatePage(page);
		$('.menuItem').removeClass('current');
		$(this).addClass('current');
	});
	$('.more').click(function() {
		$('.panel-container').toggleClass('hover');
		var open = $(this).attr('data-topic');
		$('.back '+open).css('display', 'block');
	});
	$('.back').click(function() {
		$('.panel-container').toggleClass('hover');
		$('.back .social').css('display', 'none');
		$('.back .economic').css('display', 'none');
		$('.back .environmental').css('display', 'none');
	})
	updatePage('.intro');
})