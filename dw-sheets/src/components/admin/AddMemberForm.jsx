import React, { useState, useContext } from 'react';
import { MemberContext } from './memberContext.js';

const AddMemberForm = () => {
  const [characterName, setCharacterName] = useState('');
  const [memberClass, setMemberClass] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { handleAddMember } = useContext(MemberContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const newMember = { characterName, class: memberClass, role };
      await handleAddMember(newMember);
      setSuccess(`Member ${characterName} added successfully!`);
      setCharacterName('');
      setMemberClass('');
      setRole('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Add Member</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Character Name"
          required
        />
        <select
          value={memberClass}
          onChange={(e) => setMemberClass(e.target.value)}
          required
        >
          <option value="">Select Class</option>
          <option value="Warrior">Warrior</option>
          <option value="Druid">Druid</option>
          <option value="Paladin">Paladin</option>
          <option value="Priest">Priest</option>
          <option value="Rogue">Rogue</option>
          <option value="Hunter">Hunter</option>
          <option value="Mage">Mage</option>
          <option value="Warlock">Warlock</option>
        </select>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="Tank">Tank</option>
          <option value="Healer">Healer</option>
          <option value="DPS">DPS</option>
        </select>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMemberForm;
