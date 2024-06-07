-- Truncate all tables
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE attendance_leave_types;
TRUNCATE TABLE attendance_leave_credits;
TRUNCATE TABLE attendance_leave_details;
TRUNCATE TABLE attendance_leave_status;
TRUNCATE TABLE attendance_leaves;
TRUNCATE TABLE attendance_leave_transfer_requests;
TRUNCATE TABLE attendance_unfreeze_request_status;
TRUNCATE TABLE attendance_unfreeze_requests;
TRUNCATE TABLE attendance_worklog_status;
TRUNCATE TABLE attendance_worklogs;
TRUNCATE TABLE attendance_late_worklog_application;
TRUNCATE TABLE attendance_missings;
TRUNCATE TABLE attendance_user_holidays;

SET FOREIGN_KEY_CHECKS = 1;

-- Set default super admin id
SET @super_admin_id = 34;

-- Set variables for procedure start date and end date
SET @start_date = '2019-12-01';
SET @end_date = '2024-06-05';
SET @lwop_conversion_date = '2024-05-26';


-- Insert fiscal years for all countries
INSERT INTO fiscal_year (`version`, start_date, end_date, is_current, is_transferred, date_created, last_updated, country)
VALUES 
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'Australia'),
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'Canada'),
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'India'),
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'Mexico'),
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'Vietnam'),
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'Switzerland'),
    (1, '2019-01-01', '2019-12-31', 0, 1, NOW(), NOW(), 'US');

INSERT INTO fiscal_year (`version`, start_date, end_date, is_current, is_transferred, date_created, last_updated, country)
VALUES 
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'Australia'),
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'Canada'),
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'India'),
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'Mexico'),
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'Vietnam'),
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'Switzerland'),
    (1, '2020-01-01', '2020-12-31', 0, 1, NOW(), NOW(), 'US');

INSERT INTO fiscal_year (`version`, start_date, end_date, is_current, is_transferred, date_created, last_updated, country)
VALUES 
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'Australia'),
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'Canada'),
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'India'),
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'Mexico'),
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'Vietnam'),
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'Switzerland'),
    (1, '2021-01-01', '2021-12-31', 0, 1, NOW(), NOW(), 'US');

INSERT INTO fiscal_year (`version`, start_date, end_date, is_current, is_transferred, date_created, last_updated, country)
VALUES 
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'Australia'),
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'Canada'),
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'India'),
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'Mexico'),
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'Vietnam'),
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'Switzerland'),
    (1, '2022-01-01', '2022-12-31', 0, 1, NOW(), NOW(), 'US');

INSERT INTO fiscal_year (`version`, start_date, end_date, is_current, is_transferred, date_created, last_updated, country)
VALUES 
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'Australia'),
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'Canada'),
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'India'),
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'Mexico'),
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'Vietnam'),
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'Switzerland'),
    (1, '2023-01-01', '2023-12-31', 0, 1, NOW(), NOW(), 'US');

INSERT INTO fiscal_year (`version`, start_date, end_date, is_current, is_transferred, date_created, last_updated, country)
VALUES 
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'Australia'),
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'Canada'),
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'India'),
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'Mexico'),
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'Vietnam'),
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'Switzerland'),
    (1, '2024-01-01', '2024-12-31', 1, 0, NOW(), NOW(), 'US');


-- Insert leave types
INSERT
    INTO
    attendance_leave_types (
    id,
    name,
    default_days,
    is_transferable,
    transferable_days,
    expiry_days,
    is_limited,
    is_deleted,
    created_at,
    updated_at,
    is_consecutive
  )
SELECT
      id,
      name,
      default_days,
      is_transferable,
      transferable_days,
      expiry_days,
      is_limited,
      is_deleted,
      created_at,
      updated_at,
      is_consecutive
FROM
      leave_types;
      
-- Insert leave credits
INSERT
    INTO
    attendance_leave_credits (id,
    user_id,
    leave_type_id,
    fiscal_year_id,
    leave_days,
    leave_source,
    reason,
    expires_on ,
    created_by,
    created_at,
    updated_by,
    updated_at)
SELECT 
    id,
    user_id,
    leave_type_id,
    fiscal_year_id,
    leave_days,
    CASE
        WHEN leave_source = 'ENGAGEMENT_STATUS_TRANSITION' THEN 'ENGAGEMENT_STATUS_SOURCES'
        ELSE leave_source
    END AS leave_source ,
    reason,
    expires_on ,
    -- created_by column is nullable in leave_credits table so inserting default value
    CASE
        WHEN lc.created_by IS NULL
        OR NOT EXISTS (
        SELECT
            1
        FROM
            user
        WHERE
            id = lc.created_by) THEN @super_admin_id
        ELSE lc.created_by
    END AS created_by,
    created_at,
    CASE
        WHEN NOT EXISTS (
        SELECT
            1
        FROM
            user
        WHERE
            id = lc.updated_by) THEN @super_admin_id
        ELSE lc.updated_by
    END AS updated_by,
    updated_at
FROM
    leave_credits AS lc;
    

-- Insert leaves
INSERT
    INTO
    attendance_leaves (
    id,
    user_id,
    start_date,
    end_date,
    leave_days,
    reason,
    response_remarks,
    previous_leave_id,
    leave_type_id,
    fiscal_year_id,
    created_by,
    created_at,
    updated_by,
    updated_at 
)
SELECT 
    id,
    user_id,
    start_date,
    end_date,
    leave_days,
    reason,
    response_remarks,
    previous_leave_id,
    leave_type_id,
    fiscal_year_id,
    CASE
        WHEN ll.created_by IS NULL
        OR NOT EXISTS (
        SELECT
            1
        FROM
            user
        WHERE
            id = ll.created_by) THEN @super_admin_id
        ELSE ll.created_by
    END AS created_by,
    created_at,
    CASE
        WHEN NOT EXISTS (
        SELECT
            1
        FROM
            user
        WHERE
            id = ll.updated_by) THEN @super_admin_id
        ELSE ll.updated_by
    END AS updated_by,
    updated_at
FROM
    leave_leaves ll;


-- Insert leave details
INSERT
    INTO
    attendance_leave_details (
    id,
    leave_date,
    leave_id,
    user_id,
    holiday,
    remarks,
    fiscal_year_id,
    created_at,
    updated_at  
)
SELECT
    ld.id,
    ld.leave_date,
    ld.leave_id,
    ll.user_id,
    ld.holiday,
    ld.remarks,
    ll.fiscal_year_id,
    ll.created_at,
    ll.updated_at
FROM
    leave_details ld
JOIN leave_leaves ll
ON
    ll.id = ld.leave_id;


-- Insert leave status
INSERT
    INTO
    attendance_leave_status 
    (
        id,
        leave_id,
        status,
        remarks,
        created_by,
        created_at 
    )
SELECT
    id,
    leave_id,
    status,
    remarks,
    CASE
        WHEN lls.created_by IS NULL
        OR NOT EXISTS (
        SELECT
            1
        FROM
            user
        WHERE
            id = lls.created_by) THEN @super_admin_id
        ELSE lls.created_by
    END AS created_by,
    created_at
FROM 
    leave_leave_status lls;
    

-- Insert leave transfer requests
INSERT
    INTO
    attendance_leave_transfer_requests 
(
    id,
    user_id,
    fiscal_year_id,
    leave_type_id,
    available_leave_credits,
    transfer_request_days,
    status,
    remarks,
    created_by,
    created_at,
    updated_by,
    updated_at 
)
SELECT 
    id,
    user_id,
    fiscal_year_id,
    leave_type_id,
    available_leaves,
    transfer_request_days,
    status,
    remarks,
    created_by,
    created_at,
    updated_by,
    updated_at
FROM 
    leave_transfer_requests;
    

-- Insert unfreeze requests
INSERT
    INTO
    attendance_unfreeze_requests 
(
    id,
    user_id,
    unfreeze_from,
    unfreeze_to,
    total_actionable_worklogs,
    remarks,
    created_by,
    created_at,
    updated_by,
    updated_at 
)
SELECT 
    id,
    user_id,
    unfreeze_from,
    unfreeze_to,
    total_actionable_worklogs,
    remark,
    created_by,
    created_at,
    updated_by,
    updated_at
FROM
    worklog_unfreeze_requests;


-- Insert unfreeze requests status
INSERT
    INTO
    attendance_unfreeze_request_status
(
    id,
    unfreeze_request_id,
    status,
    comment,
    created_by,
    created_at,
    updated_at,
    updated_by 
)
SELECT
    id,
    unfreeze_request_id,
    status,
    comment,
    created_by,
    created_at,
    updated_at,
    updated_by
FROM
    unfreeze_request_status;


-- Insert worklogs
INSERT
    INTO
    attendance_worklogs 
(
    id,
    work_date,
    user_id,
    leave_issuer_id,
    `user`,
    leave_issuer,
    worklog,
    location,
    workshift,
    created_by,
    created_at,
    updated_by,
    updated_at 
)
SELECT 
    id,
    work_date,
    user_id,
    leave_issuer_id,
    `user`,
    leave_issuer,
    worklog,
    location,
    worklog_shift,
    created_by,
    created_at,
    updated_by,
    updated_at
FROM
    leave_worklogs;


-- Insert worklog status
INSERT
    INTO
    attendance_worklog_status 
(
    id,
    worklog_id,
    status,
    remarks,
    created_by,
    created_at 
)
SELECT 
    id,
    worklog_id,
    status,
    remarks,
    created_by,
    created_at
FROM
    leave_worklog_status;


-- Insert late worklog application
INSERT
    INTO
    attendance_late_worklog_application 
(
    id,
    worklog_id,
    reason,
    user_id,
    `date`,
    created_by,
    created_at,
    updated_by,
    updated_at
)
SELECT 
    ur.id,
    w.id AS worklog_id,
    ur.reason,
    ur.user_id,
    ur.`date`,
    ur.created_by,
    ur.created_at,
    ur.updated_by,
    ur.updated_at
FROM 
    leave_attendance_unfreeze_requests ur
JOIN leave_worklogs w
ON
    ur.user_id = w.user_id
    AND ur.`date` = w.work_date
    AND ABS(TIMESTAMPDIFF(SECOND, ur.created_at, w.created_at)) <= 10;


-- Insert wifi_logs
INSERT
    INTO
    attendance_wifi_logs
  (
    id,
    log_id,
    created_time,
    log_created_time,
    record_id,
    `user`,
    ap_mac,
    user_device,
    created_at,
    created_by
  )
SELECT
    id,
    log_id,
    created_time,
    log_created_time,
    record_id,
    `user`,
    ap_mac,
    user_device,
    created_at,
    created_by
FROM
    wifi_logs;


-- Move current leave_credits of users from Nepal's fiscal year to their own fiscal year
SET @current_fiscal_year = 102;

UPDATE
    attendance_leave_credits alc
JOIN `user` u ON
    alc.user_id = u.id
JOIN fiscal_year fy ON
    fy.country = u.country
SET
    alc.fiscal_year_id = fy.id
WHERE
    u.country != 'Nepal'
    AND alc.fiscal_year_id = @current_fiscal_year;


-- Update attendance_leaves and attendance_leave_details
UPDATE
    attendance_leaves al
JOIN `user` u ON
    al.user_id = u.id
JOIN fiscal_year fy ON
    fy.country = u.country
SET
    al.fiscal_year_id = fy.id
WHERE
    u.country != 'Nepal'
    AND al.start_date >= fy.start_date
    AND al.end_date <= fy.end_date;


UPDATE
    attendance_leave_details ald
JOIN `user` u ON
    ald.user_id = u.id
JOIN fiscal_year fy ON
    fy.country = u.country
SET
    ald.fiscal_year_id = fy.id
WHERE
    u.country != 'Nepal'
    AND ald.leave_date >= fy.start_date
    AND ald.leave_date <= fy.end_date;


-- Procedure to add data into attendance_user_holidays
-- Inserts data from public_holiday table if the data does not exist in public_holiday_country table
-- Inserts data from public_holiday table if the country in public_holiday_country matches the user's country
-- Inserts weekends
DROP PROCEDURE IF EXISTS InsertUserHolidays;

CREATE PROCEDURE InsertUserHolidays(IN startDate DATE, IN endDate DATE)
BEGIN
  DECLARE currentDate DATE;
  SET currentDate = startDate;

WHILE currentDate <= endDate DO
    INSERT
    INTO
    attendance_user_holidays
    (
        user_id,
        fiscal_year_id,
        holiday_id,
        holiday_date,
        is_weekend,
        worklog_id
    )
    SELECT
        u.id,
        COALESCE(fy_for_user.id, fy_for_nepal.id),
        ph.id,
        currentDate,
        IF(WEEKDAY(currentDate) >= 5,
    1,
    0), 
        aw.id
    FROM
        `user` u
    LEFT JOIN fiscal_year fy_for_user ON
        u.country = fy_for_user.country
        AND currentDate BETWEEN fy_for_user.start_date AND fy_for_user.end_date
    LEFT JOIN fiscal_year fy_for_nepal ON
        'Nepal' = fy_for_nepal.country
        AND currentDate BETWEEN fy_for_nepal.start_date AND fy_for_nepal.end_date
    LEFT JOIN public_holiday ph ON
        ph.date = currentDate
    LEFT JOIN public_holiday_country phc ON
        ph.id = phc.holiday_id
    LEFT JOIN attendance_worklogs AS aw ON 
        aw.user_id = u.id
        AND aw.work_date = currentDate
    LEFT JOIN attendance_worklog_status AS aws ON
        aw.id = aws.worklog_id
    LEFT JOIN (
        SELECT
            `em`.`user_id`,
            `ens`.`name`
        FROM
        (
            SELECT
                *
            FROM
            (
                SELECT
                    `ems`.`user_id`,
                    `ems`.`engagement_status_id`,
                    ROW_NUMBER() OVER (PARTITION BY user_id
                ORDER BY
                    ems.transition_date DESC,
                    ems.created_at DESC,
                    ems.id DESC) part_row_number
                FROM
                    `emp_status` AS `ems`
                WHERE
                    `ems`.`transition_date` <= now()
            ) AS `user_status_partition`
        WHERE
            `part_row_number` = 1) AS `em`
        LEFT JOIN `engagement_status` AS `ens` ON
            `em`.`engagement_status_id` = `ens`.`id`
    ) AS `es` 
        ON `u`.`id` = `es`.`user_id`
    WHERE `es`.`name` NOT IN ('Terminated', 'Hired')
    AND 
        ((aws.created_at = (
            SELECT
            MAX(aws2.created_at)
            FROM
            attendance_worklog_status AS aws2
            WHERE
            aws2.worklog_id = aws.worklog_id
        )
        AND aws.status NOT IN ('REJECTED', 'CANCELLED'))
        OR aw.id IS NULL)
    AND u.join_date <= currentDate
    AND (phc.country_name = u.country
        OR `phc`.`country_name` IS NULL)
    AND (WEEKDAY(currentDate) >= 5
        OR ph.date IS NOT NULL)
    AND NOT EXISTS (
    SELECT
            1
    FROM
            attendance_user_holidays ah
    WHERE
            ah.user_id = u.id
        AND holiday_date = currentDate
        );

    SET currentDate = DATE_ADD(currentDate, INTERVAL 1 DAY);
  END WHILE;
END;


CALL InsertUserHolidays(@start_date, @end_date);


-- Update attendance_user_holidays table to update worklog_id for attendance submitted during holiday
UPDATE
    attendance_user_holidays auh
JOIN (
    SELECT
        aw.id AS worklog_id,
        aw.user_id,
        aw.work_date
    FROM
        attendance_worklogs aw
    JOIN (
        SELECT
            aws.worklog_id,
            aws.status,
            MAX(aws.created_at) AS max_created_at
        FROM
            attendance_worklog_status aws
        WHERE
            aws.status NOT IN ('REJECTED', 'CANCELLED')
        GROUP BY
            aws.worklog_id
  ) aws ON
        aw.id = aws.worklog_id
) aw ON
    auh.user_id = aw.user_id
    AND auh.holiday_date = aw.work_date
SET
    auh.worklog_id = aw.worklog_id,
    auh.updated_at = NOW();


-- Insert into attendance_missings table
DROP PROCEDURE IF EXISTS AddAttendanceMissings;

CREATE PROCEDURE AddAttendanceMissings(IN start_date DATE, IN end_date DATE)
BEGIN
    DECLARE currentDate DATE;
    SET currentDate = start_date;

WHILE currentDate <= end_date DO
    INSERT
    INTO
    attendance_missings 
    (
        user_id,
        fiscal_year_id,
        work_date,
        created_at
    )
    SELECT
        u.id,
        COALESCE(fy_for_user.id, fy_for_nepal.id),
        currentDate,
        NOW()
    FROM
        `user` u
    LEFT JOIN fiscal_year fy_for_user ON
        u.country = fy_for_user.country
        AND currentDate BETWEEN fy_for_user.start_date AND fy_for_user.end_date
    LEFT JOIN fiscal_year fy_for_nepal ON
        'Nepal' = fy_for_nepal.country
        AND currentDate BETWEEN fy_for_nepal.start_date AND fy_for_nepal.end_date
    LEFT JOIN (
        SELECT
            `em`.`user_id`,
            `ens`.`name`
        FROM
        (
            SELECT
                *
            FROM
            (
                SELECT
                    `ems`.`user_id`,
                    `ems`.`engagement_status_id`,
                    ROW_NUMBER() OVER (PARTITION BY user_id
                ORDER BY
                    ems.transition_date DESC,
                    ems.created_at DESC,
                    ems.id DESC) part_row_number
                FROM
                    `emp_status` AS `ems`
                WHERE
                    `ems`.`transition_date` <= now()
            ) AS `user_status_partition`
        WHERE
            `part_row_number` = 1) AS `em`
        LEFT JOIN `engagement_status` AS `ens` ON
            `em`.`engagement_status_id` = `ens`.`id`
    ) AS `es` 
        ON `u`.`id` = `es`.`user_id`
    WHERE `es`.`name` NOT IN ('Terminated', 'Hired')
        AND NOT EXISTS (
        SELECT
            1
        FROM
            attendance_leave_details ald
        JOIN (
            SELECT leave_id, status
            FROM attendance_leave_status
            WHERE (leave_id, created_at) IN (
                SELECT leave_id, MAX(created_at)
                FROM attendance_leave_status
                GROUP BY leave_id
            )
        ) als ON als.leave_id = ald.leave_id
        WHERE
            ald.user_id = u.id
            AND ald.leave_date = currentDate
            AND als.status NOT IN ('REJECTED', 'CANCELLED')
        )
        AND NOT EXISTS (
        SELECT
            1
        FROM
            attendance_worklogs aw
        JOIN (
            SELECT worklog_id, status
            FROM attendance_worklog_status
            WHERE (worklog_id, created_at) IN (
                SELECT worklog_id, MAX(created_at)
                FROM attendance_worklog_status
                GROUP BY worklog_id
            )
        ) aws ON aws.worklog_id = aw.id
        WHERE
            aw.user_id = u.id
            AND aw.work_date = currentDate
            AND aws.status NOT IN ('CANCELLED', 'REJECTED')
        )
        AND NOT EXISTS (
        SELECT
            1
        FROM
            attendance_missings am
        WHERE
            am.user_id = u.id
            AND work_date = currentDate
        )
        AND NOT EXISTS (
        SELECT
            1
        FROM
            attendance_user_holidays auh
        WHERE
            auh.user_id = u.id
            AND holiday_date = currentDate
        )
        AND u.join_date <= currentDate;

    SET currentDate = DATE_ADD(currentDate, INTERVAL 1 DAY);
END WHILE;
END;

CALL AddAttendanceMissings(@start_date, @end_date);


-- Convert pending worklogs to LWOP
DROP PROCEDURE IF EXISTS ConvertPendingWorklogToLWOP;

CREATE PROCEDURE ConvertPendingWorklogToLWOP(IN startDate DATE, IN endDate DATE)
BEGIN
    DECLARE done INT DEFAULT FALSE;

    DECLARE a_user_id, a_fiscal_year_id, a_worklog_id INT;

    DECLARE a_work_date DATE;
    
    DECLARE cur CURSOR FOR 
        SELECT 
            aw.user_id, 
            aw.work_date, 
            aw.id,
            fy.id
        FROM 
            attendance_worklogs AS aw
        JOIN 
            attendance_worklog_status AS aws ON
            aw.id = aws.worklog_id
        JOIN
            fiscal_year AS fy ON
            aw.work_date BETWEEN fy.start_date AND fy.end_date
        WHERE 
            aws.status = 'PENDING'
            AND aws.created_at = (
                SELECT
                    MAX(created_at)
                FROM
                    attendance_worklog_status
                WHERE
                    worklog_id = aw.id)
            AND aw.work_date BETWEEN startDate AND endDate;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;
    
    read_loop: LOOP
        FETCH cur
        INTO
            a_user_id,
            a_work_date,
            a_worklog_id,
            a_fiscal_year_id;
    
        IF done THEN
              LEAVE read_loop;
        END IF;
    
        INSERT
        INTO
        attendance_leaves
        (
            user_id,
            start_date,
            end_date,
            leave_days,
            reason,
            fiscal_year_id,
            leave_type_id,
            created_by,
            is_automated
        )
        VALUES
            (a_user_id,
            a_work_date,
            a_work_date,
            1,
            'Automated leave due to exceeded work log submit deadline',
            a_fiscal_year_id,
            11,
            a_user_id,
            1);
    
        SET @last_insert_id = LAST_INSERT_ID();
        
        INSERT
            INTO
            attendance_leave_status(leave_id,
            status,
            created_by)
        VALUES(@last_insert_id,
            'APPROVED',
            a_user_id);
        
        INSERT
            INTO
            attendance_leave_details(leave_date,
            leave_id,
            user_id,
            holiday,
            fiscal_year_id)
        VALUES(a_work_date,
            @last_insert_id,
            a_user_id,
            0,
            a_fiscal_year_id);

    
        -- Cancel the worklog regardless of whether it's a weekend or not
        INSERT
        INTO
        attendance_worklog_status(worklog_id,
        status,
        created_by)
        VALUES(a_worklog_id,
        'CANCELLED',
        a_user_id);
    END LOOP;

    CLOSE cur;
END;

CALL ConvertPendingWorklogToLWOP(@start_date, @lwop_conversion_date);


-- Convert missing records to LWOP
DROP PROCEDURE IF EXISTS ConvertMissingToLWOP;

CREATE PROCEDURE ConvertMissingToLWOP(IN startDate DATE, IN endDate DATE)
BEGIN
    DECLARE done INT DEFAULT FALSE;

    DECLARE a_user_id, a_fiscal_year_id INT;
    
    DECLARE a_work_date DATE;
    
    DECLARE cur CURSOR FOR 
        SELECT
            user_id,
            work_date,
            fiscal_year_id
        FROM
            attendance_missings
        WHERE
            leave_attendance_updated_at IS NULL
            AND work_date BETWEEN startDate AND endDate;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN cur;
    
    read_loop: LOOP
        FETCH cur
        INTO
            a_user_id,
            a_work_date,
            a_fiscal_year_id;
    
        IF done THEN
              LEAVE read_loop;
        END IF;
    
        INSERT
            INTO
            attendance_leaves(user_id,
            start_date,
            end_date,
            leave_days,
            reason,
            fiscal_year_id,
            leave_type_id,
            created_by,
            is_automated)
        VALUES(a_user_id,
        a_work_date,
        a_work_date,
        1,
        'Automated leave due to exceeded work log submit deadline',
        a_fiscal_year_id,
        11,
        a_user_id,
        1);
    
        SET @last_insert_id = LAST_INSERT_ID();
    
        INSERT
            INTO
            attendance_leave_status(leave_id,
            status,
            created_by)
        VALUES(
            @last_insert_id,
            'APPROVED',
            a_user_id
        );
        
        INSERT
            INTO
            attendance_leave_details(leave_date,
            leave_id,
            user_id,
            holiday,
            fiscal_year_id)
        VALUES(
            a_work_date,
            @last_insert_id,
            a_user_id,
            0,
            a_fiscal_year_id
        );
        
        UPDATE
            attendance_missings
        SET
            leave_id = @last_insert_id,
            leave_attendance_updated_at = NOW()
        WHERE
            user_id = a_user_id
            AND work_date = a_work_date
            AND fiscal_year_id = a_fiscal_year_id;
    END LOOP;
    
    CLOSE cur;
END;

CALL ConvertMissingToLWOP(@start_date, @lwop_conversion_date);