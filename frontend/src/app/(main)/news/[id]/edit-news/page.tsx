import CreateNewsSection from '@/widgets/news/create-news-section/ui/CreateNewsSection';

interface EditNewsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
  return <CreateNewsSection newsId={(await params).id} />;
}
