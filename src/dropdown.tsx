import { useEffect } from 'react';
import { FC, ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronDown } from './chevron-down.svg';

type Item = { label: ReactNode; value: string };

type DropdownProps = {
  value: string | null;
  options: Item[];
  onChange: (newValue: string) => void;
};

type DropdownItemProps = {
  item: Item;
  onSelected: (item: Item) => void;
  selected: boolean;
};

const DropdownRoot = styled.div`
  position: relative;
  width: 200px;
  margin-bottom: 16px;
`;

const DropdownItemRoot = styled.div`
  cursor: pointer;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 8px;

  &:hover {
    background: #7fffff;
  }
`;

const DropdownIndicator = styled.div`
  background: #7fffd4;
  height: 32px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const DropdownMenu = styled.div`
  background: #ffffff;
  overflow-x: hidden;
  z-index: 10;
  border-radius: 8px;
  width: 200px;
  position: absolute;
  top: 56px;
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
`;

const DropdownItem: FC<DropdownItemProps> = ({ item, onSelected }) => {
  const handleSelected = useCallback(
    () => onSelected(item),
    [onSelected, item]
  );

  return (
    <DropdownItemRoot onClick={handleSelected}>{item.label}</DropdownItemRoot>
  );
};

const Arrow = styled(ChevronDown)`
  transform: ${(props: { isOpen: boolean }) =>
    props.isOpen ? 'rotate(180deg)' : 'initial'};

  transition: all 0.2s ease-in-out;
`;

export const Dropdown: FC<DropdownProps> = ({ options, onChange, value }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelected = useCallback(
    (item: Item) => {
      onChange(item.value);
      setIsOpen(false);
    },
    [onChange]
  );

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <DropdownRoot>
      <DropdownIndicator onClick={toggleDropdown}>
        {/* <DropdownItemRoot> */}
        {value ? options.find(x => x.value === value)?.label : 'Pick a coin'}
        {/* </DropdownItemRoot> */}
        <Arrow isOpen={isOpen} />
      </DropdownIndicator>
      {isOpen && (
        <DropdownMenu>
          {options.map(item => (
            <DropdownItem
              key={item.value}
              selected={item.value === selected}
              onSelected={handleSelected}
              item={item}
            />
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  );
};
