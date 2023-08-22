import Home from "../features/home/home";
import Structure from "../features/structure/structure";
import Ui from "../features/ui/ui";
import Style from "../features/style/style";
import Misc from "../features/misc/misc";

const AppRoutes = [
{
	index: true,
	path: '/',
	element: <Home />
},
{
	path: '/structure',
	element: <Structure />
},
{
	path: '/ui-components',
	element: <Ui />
},
{
	path: '/style',
	element: <Style />
},
{
	path: '/misc',
	element: <Misc />
}
];

export default AppRoutes;
