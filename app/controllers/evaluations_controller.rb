class EvaluationsController < ApplicationController
  before_action :set_test, only: %i[ show edit update destroy ]

  # GET /evaluations or /evaluations.json
  def index
    @evaluations = Evaluation.all

  end

  # GET /evaluations/1 or /evaluations/1.json
  def show
  end

  # GET /evaluations/new
  def new
    @evaluation = Evaluation.new

  end

  # GET /evaluations/1/edit
  def edit
  end

  def quizzes
   @quiz = @evaluation.quizzes.new
  end

  # POST /evaluations or /evaluations.json
  def create
    @evaluation = Evaluation.new(evaluation_params)

    respond_to do |format|
      if @evaluation.save
        format.html { redirect_to evaluation_url(@evaluation), notice: "Test was successfully created." }
        format.json { render :show, status: :created, location: @evaluation }
      else
        flash[:error] = @evaluation.errors.full_messages
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @evaluation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /evaluations/1 or /evaluations/1.json
  def update
    respond_to do |format|
      if @evaluation.update(evaluation_params)
        format.html { redirect_to evaluation_url(@evaluation), notice: "Test was successfully updated." }
      else
        flash[:error] = @evaluation.errors.full_messages
        format.html { redirect_to :edit }
      end
    end
  end

  # DELETE /evaluations/1 or /evaluations/1.json
  def destroy


    respond_to do |format|
      if @evaluation.destroy
        flash[:notice] = "Test was successfully destroyed."
        format.html { redirect_to evaluations_url }
      else
        flash[:error] = @evaluation.errors.full_messages
        format.html { redirect_to evaluations_url }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test
      @evaluation = Evaluation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def evaluation_params
      params.require(:evaluation).permit(:title, :number_questions, :evaluation_type)
    end
end
