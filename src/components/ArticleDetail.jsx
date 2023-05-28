import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch(state => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
        dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article))
      } catch (error) {
        dispatch(getArticleDetailFailure())
      }
    };

    getArticleDetail();
  }, [slug]);

  return <div>{slug}</div>;
};

export default ArticleDetail;
