<?
$title = "Published Work";
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
					<p>This is a little bit of my work that has been published in our college's student-run magazine. I had the pleasure of acting as a staff photographer, was then promoted to Senior Photo Editor, and am now at the head of it all as Editor-in-Chief. Nothing will beat the hands-on photography experience I received while working for The Point. The leadership preparation I was able to receive has also been a tremendous blessing in the work force and my personal life.</p>
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
		      photoset_id: '72157646756847168',
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