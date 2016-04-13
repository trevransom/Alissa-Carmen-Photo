<?
$title = "Samaritan's Purse";
include "../../../header.php";
?>


<div id="detailed_album">
	<div class="sticky_header">
		<div class="header">
			<div id="gallery_logo_img"><a href="http://alissacarmenphoto.com/"><img src="../../../img/logo.png"></a></div>
			<div id="menu">
				<img src="../../../img/circle_logo.png">
				<div>
					<li><a href="http://www.alissacarmenphoto.com/about">About</a></li>
					<li><a href="http://www.alissacarmenphoto.com/contact">Contact</a></li>
				</div>
			</div>
		</div>
	</div>

	<div id="page-wrap">
		<div class="gallery_body">
			<div id="gallery_body">
				<div id="set_description">
				<p>I am currently working with Samaritan's Purse, an International Relief Organization, running Communications in their Haiti Office. 
					Part of my dream job is taking photographs of stunning people and telling their stories. Here are a few of my favorite shotes 
					from the past few months.</p>
				</div>
				<div id="photo_fill"></div>
			</div>
		</div>		
	</div>
</div>

<?
include "../../../footer.php";
?>

<script type="text/javascript">
	$(function(){
		$('#photo_fill').jflickrfeed({
		    // limit: 50,
		    qstrings: {
		      id: '126210380@N08',
		      photoset_id: '72157661760392770',
		      api_key: '7c9be774fd7c86d2c810b1c2b561b872'
		    },
		    itemTemplate: '<div id="photo_container"><li><a class="fancybox" href="{{image_b}}"><img src="{{image_b}}" alt="{{title}}" /></a></li></div>'
		  });
	});

	$(function() {
		$('.fancybox').fancybox({
		  padding: 0,
		  helpers: {
		    overlay: {
		      locked: false
		    }
		  }
		});
	});
</script>