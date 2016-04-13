<?
$title = "Sarah and Jason";
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
					<p>This couple got engaged this past summer! I played soccer with Sarah in Jr. High so taking her engagement photos was extremely exciting for me. It made me happy to see her with someone who made her as happy as can be. It was very evident that these two can be nothing but themselves around each other and it is the best thing to witness. Congratulations Sarah & Jason! Blessings and happiness to you both!</p>
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
		      photoset_id: '72157646327698480',
		      api_key: '7c9be774fd7c86d2c810b1c2b561b872'
		    },
		    itemTemplate: '<div id="photo_container"><li><a class="fancybox" href="{{image_b}}"><img src="{{image_b}}" alt="{{title}}" /></a></li></div>'
		  });
	});

// 	$('#flickrEmbed').jflickrfeed({
// qstrings: {
// id: '37304598@N02',
// photoset_id: '72157616666649468',
// api_key: 'YOUR_KEY_HERE'
// },
// itemTemplate: 
// '' 
// '' 
// ''
// });

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