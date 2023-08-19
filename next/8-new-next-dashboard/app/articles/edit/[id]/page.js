import ArticleForm from '../../../components/ArticleForm';

export default function EditArticlePage(context) {
  const { params } = context;
  const { id } = params;

  return <ArticleForm type="edit" articleId={id} />;
}
