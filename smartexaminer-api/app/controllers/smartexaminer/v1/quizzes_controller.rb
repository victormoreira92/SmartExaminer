module Smartexaminer
  module V1
    class QuizzesController < ApplicationController
      before_action :set_quiz, only: %i[ show update destroy ]

      # GET /quizzes
      def index
        @quizzes = Quiz.all

        render json: @quizzes
      end

      # GET /quizzes/1
      def show
        render json: @quiz
      end

      # POST /quizzes
      def create
        @quiz = Quiz.new(quiz_params)

        if @quiz.save
          render json: {
            quiz: @quiz,
            message: I18n.t('activerecord.messages.created', model: Quiz.model_name.human)
          },
          status: :created
        else
          render json: {
                   messages: @quiz.errors.full_messages
          }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /quizzes/1
      def update
        if @quiz.update(quiz_params)
          render json: {
            quiz: @quiz,
            message: I18n.t('activerecord.messages.updated', model: Quiz.model_name.human)
          }, status: :ok
        else
          render json: {
            messages: @quiz.errors.full_messages
          }, status: :unprocessable_entity
        end
      end

      # DELETE /quizzes/1
      def destroy
        if @quiz.destroy
          render json: {
            message: I18n.t('activerecord.messages.deleted', model: Quiz.model_name.human)
          },status: :ok
        else
          render json: {
            message: @quiz.errors.full_messages
          }, status: :unprocessable_entity
        end
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_quiz
          @quiz = Quiz.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def quiz_params
          params.require(:quiz).permit(:title, :status_quiz, :description)
        end
    end
  end
end
