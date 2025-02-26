
using System.Collections.Generic;


namespace Core {
public interface IQuestionRepository
    {
        Task<(Status, int id)> Create(CreateQuestionDTO questionDTO);
        Task<(Status, QuestionDTO)> Read(int id);
        Task<Status> Update(int id, CreateQuestionDTO questionDTO);
        Task<Status> UpdateImage(int id, string imageUrl);

        Task<Status> Delete(int id);

        Task<IReadOnlyCollection<QuestionDTO>> ReadAll();

    }
}