import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Import custom matchers
import CreateQuestion from "./CreateQuestion";
import * as questionService from "~/services/questionService";
import { describe, it, vi } from "vitest";
import { BrowserRouter } from "react-router";

// mock da função externa
vi.mock("~/services/questionService", () => ({
  createQuestion: vi.fn(),
}));

// wrapper com Router (porque usa useNavigate)
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("CreateQuestion Component", () => {

  beforeEach(() => {
    renderWithRouter(<CreateQuestion />);
  })

  it("renders without crashing", () => {
    expect(screen.getByText(/Create Question/i)).toBeInTheDocument();
  });

  it("changes question type to 'True or False' when button is clicked", () => {
    renderWithRouter(<CreateQuestion />);
    const btn = screen.getByText(/True or False/i);
    fireEvent.click(btn);
    expect(screen.getAllByText(/Set as correct/i)).toHaveLength(2);
  });

  it("changes question type to 'Short Answer' when button is clicked", async () => {
    const btn = screen.getByText(/Short Answer/i);
    fireEvent.click(btn);
    const input = await screen.findByTestId("short_answer_1");
    expect(screen.getAllByText(/Add Another Answer/i)).toHaveLength(1);
    expect(input).toBeInTheDocument();
  });

  it("changes question type to 'Multiple Choice' when button is clicked", async () => {
    const btn = screen.getByText(/Multiple Choice/i);
    fireEvent.click(btn);
    expect(screen.getAllByText(/Add Another Answer/i)).toHaveLength(1);
  });
  
  it("changes question type to 'Essay' when button is clicked", () => {
    const btn = screen.getByText(/Essay/i);
    fireEvent.click(btn);
    expect(screen.queryByText(/Add Another Answer/i)).not.toBeInTheDocument();
  });

  it("calls onTypeChange with 'multiple_choice' when clicked", () => {
    const mockFn = vi.fn();
    render(<CreateQuestion />);
    fireEvent.click(screen.getByText(/Multiple Choice/i));
    expect(mockFn).toHaveBeenCalledWith("multiple_choice");
  });


  it("submits form when valid", () => {
    const mockCreate = vi.spyOn(questionService, "createQuestion");

    renderWithRouter(<CreateQuestion />);

    fireEvent.click(screen.getByText(/Short Answer/i));

    fireEvent.change(screen.getByPlaceholderText("Pontuação"), {
      target: { value: "10" },
    });

    fireEvent.change(screen.getByPlaceholderText("Feedback para resposta correta"), {
      target: { value: "Muito bem!" },
    });

    fireEvent.change(screen.getByPlaceholderText("Feedback para resposta incorreta"), {
      target: { value: "Tente novamente." },
    });

    // Simula edição de conteúdo do EditorQuestion (mockado)
    const contentSetter = screen.getByLabelText("Content"); // ajuste dependendo do Editor
    if (contentSetter) fireEvent.change(contentSetter, { target: { value: "Qual é a capital do Brasil?" } });

    fireEvent.click(screen.getByText(/Atualizar Pergunta/i));

    expect(mockCreate).toHaveBeenCalled();
  });
});
