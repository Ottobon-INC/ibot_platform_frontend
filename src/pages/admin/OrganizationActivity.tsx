import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { 
  ChevronRight,
  Search,
  Filter,
  ArrowDownUp,
  Activity,
  PlayCircle,
  Mail,
  UserCog,
  FileCheck
} from 'lucide-react';

interface ActivityItem {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  actor?: string;
  time: string;
  icon: React.ElementType;
  iconColor: string;
}

interface ActivityGroup {
  date: string;
  items: ActivityItem[];
}

const mockActivity: ActivityGroup[] = [
  {
    date: 'TODAY',
    items: [
      {
        id: '1',
        type: 'project',
        title: 'Project Run activated',
        subtitle: 'Graduate Talent Project · Apr 2027',
        actor: 'by Suresh Kumar',
        time: '10:15 AM',
        icon: PlayCircle,
        iconColor: 'text-blue-500'
      },
      {
        id: '2',
        type: 'member',
        title: 'Organization member invited',
        subtitle: 'kiran@abctech.com',
        actor: 'by Ravi Kumar',
        time: '9:40 AM',
        icon: Mail,
        iconColor: 'text-amber-500'
      }
    ]
  },
  {
    date: 'YESTERDAY',
    items: [
      {
        id: '3',
        type: 'project',
        title: 'Project Lead changed',
        subtitle: 'Graduate Talent Project\nSuresh Kumar → Priya Rao',
        time: '4:20 PM',
        icon: UserCog,
        iconColor: 'text-purple-500'
      },
      {
        id: '4',
        type: 'commercial',
        title: 'Commercial V2 approved',
        subtitle: 'Graduate Talent Project',
        time: '2:15 PM',
        icon: FileCheck,
        iconColor: 'text-green-500'
      }
    ]
  },
  {
    date: '18 SEP 2026',
    items: [
      {
        id: '5',
        type: 'phase',
        title: 'Build ownership changed',
        subtitle: 'Graduate Talent Project · Apr 2027\nOttobon → Organization',
        time: '11:30 AM',
        icon: Activity,
        iconColor: 'text-indigo-500'
      }
    ]
  }
];

export default function OrganizationActivity() {
  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-[900px] mx-auto animate-in fade-in duration-500 pb-24">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-ink-gray-5 mb-6 uppercase tracking-wider">
          <Link to="/admin/organizations" className="hover:text-ink-gray-9 transition-colors">Organizations</Link>
          <ChevronRight className="size-3" />
          <Link to="/admin/organizations/abc-tech" className="hover:text-ink-gray-9 transition-colors">ABC Technologies</Link>
          <ChevronRight className="size-3" />
          <span className="text-ink-gray-9">Activity</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Organization Activity</h1>
          <p className="text-sm font-medium text-ink-gray-6">View important activity for ABC Technologies.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-4" />
              <input 
                type="text" 
                placeholder="Search activity..."
                className="w-full pl-9 pr-4 py-2 bg-surface-gray-1 border border-outline-gray-3 rounded-md text-sm text-ink-gray-9 placeholder:text-ink-gray-4 focus:outline-none focus:border-ink-gray-9 focus:bg-white transition-colors"
              />
            </div>
            
            <Button variant="outline" theme="gray" className="gap-2">
              Type <Filter className="size-3.5" />
            </Button>
            <Button variant="outline" theme="gray" className="gap-2">
              Date <Filter className="size-3.5" />
            </Button>
            <Button variant="outline" theme="gray" className="gap-2">
              Actor <Filter className="size-3.5" />
            </Button>
          </div>
          
          <Button variant="ghost" theme="gray" className="gap-2 self-start md:self-auto">
            Newest first <ArrowDownUp className="size-3.5" />
          </Button>
        </div>

        <div className="text-xs font-medium text-ink-gray-5 mb-6">248 activities</div>

        {/* Activity Feed */}
        <div className="space-y-10">
          {mockActivity.map((group) => (
            <div key={group.date}>
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">
                {group.date}
              </h2>
              <div className="divide-y divide-outline-gray-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="py-4 flex gap-4 hover:bg-surface-gray-1 -mx-4 px-4 transition-colors rounded-lg group cursor-default">
                      <div className="mt-0.5 shrink-0">
                        <div className="size-8 rounded-full bg-surface-gray-2 flex items-center justify-center border border-outline-gray-3 group-hover:bg-white transition-colors">
                          <Icon className={`size-4 ${item.iconColor}`} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-bold text-ink-gray-9 text-sm">{item.title}</div>
                            {item.subtitle && (
                              <div className="text-sm text-ink-gray-7 mt-1 whitespace-pre-line">
                                {item.subtitle}
                              </div>
                            )}
                            {item.actor && (
                              <div className="text-sm text-ink-gray-5 mt-1.5 font-medium">
                                {item.actor}
                              </div>
                            )}
                          </div>
                          <div className="shrink-0 text-right w-24">
                            <span className="text-xs font-mono text-ink-gray-5">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-10 text-center">
          <Button variant="outline" theme="gray" className="px-8 bg-white">
            Load more
          </Button>
        </div>

      </div>
    </AdminLayout>
  );
}
