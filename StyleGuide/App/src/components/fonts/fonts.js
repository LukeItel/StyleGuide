import './fonts.scss';
import CopyMe from '../copyMe/copyMe';

const Fonts = () => {

	return (
		<>
			<div className="fonts_example">
				<p className="roboto_l_bold text-align-center">Useage example</p>
				<p className="roboto_m">Subtitle</p>
				<p className="roboto_s_light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat non diam finibus gravida. Sed ornare quam ac libero aliquet aliquam. Etiam porta, eros eu venenatis semper, augue mauris pretium nunc, sed feugiat diam massa non mi. Cras et lacus ac lectus lobortis condimentum ut sit amet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id posuere massa. Aenean blandit sodales turpis, sit amet malesuada ante molestie at. Aliquam et sapien et lorem gravida convallis.</p>
				<p className="roboto_m">Subtitle</p>
				<p className="roboto_s_light">Proin egestas rhoncus scelerisque. Sed sagittis vitae erat nec fringilla. In eget tempor ante. Suspendisse tincidunt congue lorem, eu accumsan felis iaculis a. Nulla placerat bibendum lectus, ac iaculis erat hendrerit a. Sed faucibus, lacus id efficitur volutpat, orci ante vulputate sem, sit amet vehicula orci eros quis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut pretium libero.</p>
				<p className="roboto_s_light">Proin egestas rhoncus scelerisque. <span className="roboto_s_xbold">Sed sagittis vitae erat nec fringilla.</span> In eget tempor ante. Suspendisse tincidunt congue lorem, eu accumsan felis iaculis a. Nulla placerat bibendum lectus, ac iaculis erat hendrerit a. Sed faucibus, lacus id efficitur volutpat, orci ante vulputate sem, sit amet vehicula orci eros quis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut pretium libero.</p>
				<p className="roboto_xs_light">This would probably only be used for t&c's type text, this size is the smallest so it should be used spareingly, because we can't go any lower!</p>
			</div>
			<div className="fonts_grid">

				<p className="fonts_grid_header roboto_m_bold">Extra Large</p>
				<p className="fonts_gird_colheader roboto_s_bold">Example</p>
				<p className="fonts_gird_colheader roboto_s_bold">Mixin</p>
				<p className="fonts_gird_colheader roboto_s_bold">Class Name</p>

				<p className="roboto_xl_light">Roboto X Large Light</p>
				<CopyMe string="@include roboto_xl(300);" />
				<CopyMe string="roboto_xl_light" />

				<p className="roboto_xl">Roboto X Large Normal</p>
				<CopyMe string="@include roboto_xl;" />
				<CopyMe string="roboto_xl" />

				<p className="roboto_xl_bold">Roboto X Large Bold</p>
				<CopyMe string="@include roboto_xl(500);" />
				<CopyMe string="roboto_xl_bold" />

				<p className="roboto_xl_xbold">Roboto X Large X Bold</p>
				<CopyMe string="@include roboto_xl(700);" />
				<CopyMe string="roboto_xl_xbold" />

				<p className="fonts_grid_header roboto_m_bold">Large</p>
				<p className="fonts_gird_colheader roboto_s_bold">Example</p>
				<p className="fonts_gird_colheader roboto_s_bold">Mixin</p>
				<p className="fonts_gird_colheader roboto_s_bold">Class Name</p>
								
				<p className="roboto_l_light">Roboto Large Light</p>
				<CopyMe string="@include roboto_l(300);" />
				<CopyMe string="roboto_l_light" />

				<p className="roboto_l">Roboto Large Normal</p>
				<CopyMe string="@include roboto_l;" />
				<CopyMe string="roboto_l" />

				<p className="roboto_l_bold">Roboto Large Bold</p>
				<CopyMe string="@include roboto_l(500);" />
				<CopyMe string="roboto_l_bold" />

				<p className="roboto_l_xbold">Roboto Large X Bold</p>
				<CopyMe string="@include roboto_l(700);" />
				<CopyMe string="roboto_l_xbold" />

				<p className="fonts_grid_header roboto_m_bold">Medium</p>
				<p className="fonts_gird_colheader roboto_s_bold">Example</p>
				<p className="fonts_gird_colheader roboto_s_bold">Mixin</p>
				<p className="fonts_gird_colheader roboto_s_bold">Class Name</p>
				
				<p className="roboto_m_light">Roboto Medium Light</p>
				<CopyMe string="@include roboto_m(300);" />
				<CopyMe string="roboto_m_light" />

				<p className="roboto_m">Roboto Medium Normal</p>
				<CopyMe string="@include roboto_m;" />
				<CopyMe string="roboto_m" />

				<p className="roboto_m_bold">Roboto Medium Bold</p>
				<CopyMe string="@include roboto_m(500);" />
				<CopyMe string="roboto_m_bold" />

				<p className="roboto_m_xbold">Roboto Medium X Bold</p>
				<CopyMe string="@include roboto_m(700);" />
				<CopyMe string="roboto_m_xbold" />

				<p className="fonts_grid_header roboto_m_bold">Small</p>
				<p className="fonts_gird_colheader roboto_s_bold">Example</p>
				<p className="fonts_gird_colheader roboto_s_bold">Mixin</p>
				<p className="fonts_gird_colheader roboto_s_bold">Class Name</p>
				
				<p className="roboto_s_light">Roboto Small Light</p>
				<CopyMe string="@include roboto_s(300);" />
				<CopyMe string="roboto_s_light" />

				<p className="roboto_s">Roboto Small Normal</p>
				<CopyMe string="@include roboto_s;" />
				<CopyMe string="roboto_s" />

				<p className="roboto_s_bold">Roboto Small Bold</p>
				<CopyMe string="@include roboto_s(500);" />
				<CopyMe string="roboto_s_bold" />

				<p className="roboto_s_xbold">Roboto Small X Bold</p>
				<CopyMe string="@include roboto_s(700);" />
				<CopyMe string="roboto_s_xbold" />

				<p className="fonts_grid_header roboto_m_bold">Extra Small</p>
				<p className="fonts_gird_colheader roboto_s_bold">Example</p>
				<p className="fonts_gird_colheader roboto_s_bold">Mixin</p>
				<p className="fonts_gird_colheader roboto_s_bold">Class Name</p>
				
				<p className="roboto_xs_light">Roboto X Small Light</p>
				<CopyMe string="@include roboto_xs(300);" />
				<CopyMe string="roboto_xs_light" />

				<p className="roboto_xs">Roboto X Small Normal</p>
				<CopyMe string="@include roboto_xs;" />
				<CopyMe string="roboto_xs" />

				<p className="roboto_xs_bold">Roboto X Small Bold</p>
				<CopyMe string="@include roboto_xs(500);" />
				<CopyMe string="roboto_xs_bold" />

				<p className="roboto_xs_xbold">Roboto X Small X Bold</p>
				<CopyMe string="@include roboto_xs(700);" />
				<CopyMe string="roboto_xs_xbold" />

			</div>
			
		</>
	);
}

export default Fonts