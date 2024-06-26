import { Library, Notebook, Search, BarChart3, PieChart } from 'lucide-react';
import Profile from '../carti/components/Profile';
import Link from 'next/link';

const Sidebar = ({ nr_crt }: any) => {
    return (
        <div className="hidden border-r bg-muted/40 md:block ">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <Library className="h-6 w-6" />
                        <span className="">Filadelfia</span>
                    </Link>
                    <Profile />
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            href={`/situatie?nr_crt=${nr_crt}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Notebook className="h-4 w-4" />
                            Situatie{' '}
                        </Link>
                        <Link
                            href={`/search?nr_crt=${nr_crt}&display=false`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Search className="h-4 w-4" />
                            Cautare
                        </Link>
                        <Link
                            href={`/studentstats?nr_crt=${nr_crt}`}
                            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary "
                        >
                            <PieChart className="h-4 w-4" />
                            Statistici
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
