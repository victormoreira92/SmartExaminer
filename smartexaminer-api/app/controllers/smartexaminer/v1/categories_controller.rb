module Smartexaminer
  module V1
    class CategoriesController < ApplicationController
      def index
        @categories = Category.all
        render json: @categories
      end

      def create
        @category = Category.new(category_params)

        if @category.save
          render json: {
            category: @category,
            message: I18n.t('activerecord.messages.created', model: Category.model_name.human)
          }, status: :created
        else
          render json: {
                   messages: @category.errors.full_messages
          }, status: :unprocessable_entity
        end
      end

      private
      # Only allow a list of trusted parameters through.
      def category_params
        params.require(:category).permit(:category_name)
      end
    end
  end
end
