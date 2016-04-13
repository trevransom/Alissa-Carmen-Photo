<?
$title = "TJ Hogan";
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
					<p>Meet TJ Hogan! He just finished Senior at Woodrow Wilson High School in Long Beach, CA. After playing soccer abroad in Germany for a year, he has returned to California and spent his Senior year in Naples, CA. It was a pleasure taking his Senior Portraits and I can't wait to see where he goes from here!</p>
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
		      photoset_id: '72157646063161929',
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